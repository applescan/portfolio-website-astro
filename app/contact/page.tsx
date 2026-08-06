import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact Felicia Fel about product engineering, creative development, and thoughtful web work.",
};

const channels = [
	{
		index: "01",
		label: "Email",
		handle: "feliu.ren@gmail.com",
		href: "mailto:feliu.ren@gmail.com",
		note: "Best for projects, roles, and detailed hellos.",
	},
	{
		index: "02",
		label: "LinkedIn",
		handle: "Felicia Fel",
		href: "https://www.linkedin.com/in/felicia-fel/",
		note: "Professional history and shorter hellos.",
	},
	{
		index: "03",
		label: "GitHub",
		handle: "@applescan",
		href: "https://github.com/applescan",
		note: "Code, experiments, and commit archaeology.",
	},
];

export default function ContactPage() {
	return (
		<>
			<SiteHeader />
			<main className="contact-page">
				<section className="contact-hero page-shell">
					<div>
						<p className="kicker">OPEN CHANNEL / NO FORM REQUIRED</p>
						<h1>Want to make something together?</h1>
						<p className="contact-lead">
							If you&apos;re working on a product or interactive campaign—or just think we
							might be a good fit—send me a note. I&apos;d love to hear what you&apos;re making.
						</p>
					</div>
					<div className="contact-stamp" aria-hidden="true">
						<span>AVAILABLE FOR</span>
						<strong>GOOD<br />CONVERSATIONS</strong>
						<small>AUCKLAND · NZT</small>
					</div>
				</section>

				<section className="contact-channels page-shell" aria-label="Contact channels">
					{ channels.map((channel) => (
						<a key={ channel.label } href={ channel.href } target={ channel.label === "Email" ? undefined : "_blank" } rel="noreferrer">
							<span>{ channel.index }</span>
							<div>
								<p>{ channel.label }</p>
								<h2>{ channel.handle }</h2>
							</div>
							<p>{ channel.note }</p>
							<strong aria-hidden="true">↗</strong>
						</a>
					)) }
				</section>

				<section className="contact-note-section page-shell">
					<p>Response protocol</p>
					<h2>I read every message myself. Tell me a little about what you&apos;re working on.</h2>
					<a className="primary-button" href="mailto:feliu.ren@gmail.com?subject=Hello%20Felicia">
						Write the email <span aria-hidden="true">↗</span>
					</a>
				</section>
			</main>
		</>
	);
}
