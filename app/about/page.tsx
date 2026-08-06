import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { capabilities, education, experience, facts } from "../portfolio-data";

export const metadata: Metadata = {
	title: "About",
	description: "Felicia Fel's path from visual design and VFX to creative full-stack engineering.",
};

export default function AboutPage() {
	return (
		<>
			<SiteHeader />
			<main className="about-page">
				<section className="about-page-hero page-shell">
					<div className="about-page-title">
						<p className="kicker">PERSONNEL FILE / FELICIA FEL</p>
						<h1>I started in design. Then I wanted to know how it all worked.</h1>
						<p>
							I&apos;m Felicia, a full-stack engineer in Auckland. I bring a design
							background to the web products and interactive things I build.
						</p>
					</div>
					<div className="about-file-photo">
						<div className="file-tab">ID: FF-2018-∞</div>
						<img src="/favicon.png" alt="Illustrated portrait of Felicia Fel" />
						<div className="photo-caption">
							<span>BASE</span> Auckland, Aotearoa NZ
							<span>MODE</span> Coffee × Engineering
						</div>
					</div>
				</section>

				<section className="origin-section page-shell">
					<div>
						<p className="kicker">01 / ORIGIN STORY</p>
						<h2>It wasn&apos;t really a career change.</h2>
					</div>
					<div className="origin-copy">
						<p>
							I studied 3D animation and VFX, then worked in visual design. The more
							websites and products I designed, the more I wanted to understand what
							was happening underneath. So I started learning how to build them too.
						</p>
						<p>
							Today I work across Vue/Nuxt, React/Next.js, Angular, Node.js,
							TypeScript, PostgreSQL, GraphQL, Redis, Docker, and cloud tooling. I
							care less about a long list of frameworks than using the right tools
							and leaving things in a solid state for the next person.
						</p>
						<p>
							Having worked in both design and engineering, I tend to notice how a
							product works as well as how it feels to use. I like getting involved
							early and seeing a project through to the end.
						</p>
					</div>
				</section>

				<section className="capability-section">
					<div className="page-shell capability-grid">
						<div>
							<p className="kicker">02 / OPERATING RANGE</p>
						<h2>The work I like getting stuck into.</h2>
							<p className="capability-intro">
							I&apos;m comfortable moving between frontend work, backend systems, data,
							testing, CI/CD, and deployment when a project needs it.
							</p>
						</div>
						<ol>
							{ capabilities.map((capability, index) => (
								<li key={ capability }>
									<span>0{ index + 1 }</span> { capability }
								</li>
							)) }
						</ol>
					</div>
				</section>

				<section className="career-section page-shell">
					<div className="section-heading compact">
						<div>
							<p className="kicker">03 / FIELD HISTORY</p>
						<h2>Places I&apos;ve worked.</h2>
						</div>
					</div>
					<div className="timeline">
						{ experience.map((item) => (
							<article key={ item.company }>
								<time>{ item.period }</time>
								<div>
									<h3>{ item.company }</h3>
									<p>{ item.role }</p>
								</div>
								<p>{ item.detail }</p>
							</article>
						)) }
					</div>
				</section>

				<section className="study-section page-shell">
					<div>
						<p className="kicker">04 / FORMAL DOWNLOADS</p>
						<h2>Education</h2>
					</div>
					<ul>
						{ education.map((item, index) => (
							<li key={ item }>
								<span>{ String(index + 1).padStart(2, "0") }</span>{ item }
							</li>
						)) }
					</ul>
				</section>

				<section className="facts-section page-shell about-facts">
					<div className="section-heading compact">
						<div>
							<p className="kicker">05 / OFF THE CLOCK</p>
							<h2>The human details.</h2>
						</div>
					</div>
					<div className="fact-grid">
						{ facts.slice(4).map((fact) => (
							<article key={ fact.marker }>
								<h3>{ fact.title }</h3>
								<p>{ fact.text }</p>
							</article>
						)) }
					</div>
					<Link className="primary-button about-work-link" href="/projects">
						See what all of that became <span aria-hidden="true">↗</span>
					</Link>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
