import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { ProjectCard } from "../components/project-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { projectDetails } from "../portfolio-data";

export const metadata: Metadata = {
	title: "Project Archive",
	description: "Software products, interactive campaigns, and engineering experiments by Felicia Fel.",
};

function getCaseNumber(slug: string) {
	const code = projectDetails[slug]?.code;
	const match = code?.match(/\d+/);
	return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

export default function ProjectsPage() {
	const projects = allProjects
		.filter((project) => project.published)
		.sort((a, b) => {
			const caseOrder = getCaseNumber(a.slug) - getCaseNumber(b.slug);
			if (caseOrder !== 0) return caseOrder;

			const aTime = a.date ? new Date(a.date).getTime() : 0;
			const bTime = b.date ? new Date(b.date).getTime() : 0;
			return bTime - aTime;
		});

	return (
		<>
			<SiteHeader />
			<main className="archive-page">
				<section className="archive-hero page-shell">
					<div>
						<p className="kicker">PROJECT ARCHIVE / {projects.length} FILES</p>
						<h1>Things I&apos;ve helped make and put into the world.</h1>
					</div>
					<aside>
						<span>THE EVIDENCE ROOM</span>
						<p>
							This is a mix of client work and personal projects. Some are polished
							campaigns; some started because I wanted to try an idea for myself.
						</p>
					</aside>
				</section>

				<section className="projects-archive page-shell" aria-label="All projects">
					{projects.map((project, index) => (
						<ProjectCard key={project.slug} project={project} priority={index < 2} />
					))}
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
