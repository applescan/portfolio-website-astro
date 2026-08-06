"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";
import { facts } from "../portfolio-data";

const heroFacts = facts.slice(0, 5);

export function BrainMap() {
	const stageRef = useRef<HTMLDivElement>(null);
	const eyeRef = useRef<SVGGElement>(null);
	const [factIndex, setFactIndex] = useState(0);
	const [factVisible, setFactVisible] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const firstNote = window.setTimeout(() => setFactVisible(true), 1800);
		const nextNote = window.setInterval(() => {
			setFactIndex((current) => (current + 1) % heroFacts.length);
			setFactVisible(true);
		}, 6500);

		return () => {
			window.clearTimeout(firstNote);
			window.clearInterval(nextNote);
		};
	}, []);

	function trackEye(event: PointerEvent<HTMLDivElement>) {
		if (!stageRef.current || !eyeRef.current) return;

		const bounds = stageRef.current.getBoundingClientRect();
		const eyeX = bounds.left + bounds.width * 0.735;
		const eyeY = bounds.top + bounds.height * 0.405;
		const deltaX = event.clientX - eyeX;
		const deltaY = event.clientY - eyeY;
		const distance = Math.hypot(deltaX, deltaY) || 1;
		const strength = Math.min(distance / 260, 1);
		const x = (deltaX / distance) * strength * 24;
		const y = (deltaY / distance) * strength * 14;

		eyeRef.current.style.transform = `translate(${x}px, ${y}px)`;
	}

	function resetEye() {
		if (eyeRef.current) eyeRef.current.style.transform = "translate(0, 0)";
	}

	return (
		<div
			className="brain-gate-stage"
			ref={ stageRef }
			onPointerMove={ trackEye }
			onPointerLeave={ resetEye }
		>
			<div className="brain-gate-board" aria-hidden="true" />
			<svg
				className="brain-gate-collage"
				viewBox="0 0 1000 620"
				role="img"
				aria-labelledby="gate-title gate-description"
			>
				<title id="gate-title">A collage of Felicia&apos;s brain and an eye</title>
				<desc id="gate-description">
					A hand-drawn cutaway brain connects product judgement, code, and play to a large animated eye that follows the pointer.
				</desc>
				<defs>
					<filter id="gate-rough">
						<feTurbulence baseFrequency="0.014" numOctaves="2" seed="12" result="noise" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" />
					</filter>
					<filter id="gate-shadow" x="-20%" y="-20%" width="150%" height="160%">
						<feDropShadow dx="9" dy="12" stdDeviation="7" floodColor="#171713" floodOpacity="0.24" />
					</filter>
					<clipPath id="gate-eye-clip">
						<path d="M536 255 C596 166 806 160 923 250 C839 353 632 359 536 255 Z" />
					</clipPath>
					<pattern id="gate-hatch" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(24)">
						<line x1="0" y1="0" x2="0" y2="11" stroke="#171713" strokeOpacity="0.12" strokeWidth="2" />
					</pattern>
				</defs>

				<g className="brain-gate-threads" fill="none">
					<path d="M101 116 C176 129 214 157 260 203" />
					<path d="M66 324 C157 319 190 301 228 285" />
					<path d="M155 540 C220 494 261 456 286 410" />
					<path d="M805 73 C790 124 782 157 780 184" />
					<path d="M900 478 C844 424 813 389 799 342" />
				</g>

				<g className="brain-illustration" filter="url(#gate-shadow)">
					<path
						className="brain-cutout-shadow"
						d="M131 248 C88 185 137 116 214 122 C235 67 319 59 357 108 C413 76 482 107 489 168 C542 187 547 263 501 292 C528 350 476 407 420 396 C383 449 299 442 270 398 C200 423 132 382 146 322 C99 308 93 269 131 248 Z"
					/>
					<path
						className="brain-cutout"
						d="M119 232 C80 174 129 107 204 113 C224 58 307 50 346 99 C402 67 471 98 478 159 C531 178 536 254 490 283 C517 341 465 398 409 387 C372 440 288 433 259 389 C189 414 121 373 135 313 C88 299 81 256 119 232 Z"
					/>
					<path className="brain-hatch" d="M119 232 C80 174 129 107 204 113 C224 58 307 50 346 99 C402 67 471 98 478 159 C531 178 536 254 490 283 C517 341 465 398 409 387 C372 440 288 433 259 389 C189 414 121 373 135 313 C88 299 81 256 119 232 Z" />

					<g className="brain-zone zone-design">
						<path d="M147 175 C167 127 232 111 270 140 C291 168 272 216 234 228 C194 241 145 219 147 175 Z" />
						<text x="211" y="179" textAnchor="middle">IDEAS</text>
					</g>
					<g className="brain-zone zone-code">
						<path d="M289 121 C337 87 408 109 430 155 C449 195 410 229 364 223 C320 218 278 174 289 121 Z" />
						<text x="358" y="158" textAnchor="middle">SYSTEMS</text>
					</g>
					<g className="brain-zone zone-play">
						<path d="M263 258 C296 219 368 217 402 250 C435 283 405 337 357 350 C302 365 247 321 263 258 Z" />
						<text x="337" y="285" textAnchor="middle">SIDE QUESTS</text>
					</g>

					<g className="brain-circuit" fill="none">
						<path d="M230 227 C248 246 264 252 279 256" />
						<path d="M364 224 C359 233 354 240 349 248" />
						<path d="M403 263 C434 252 453 242 474 221" />
						<circle cx="230" cy="227" r="5" />
						<circle cx="474" cy="221" r="5" />
					</g>

					<path className="brain-fold-line" d="M155 272 C179 243 212 246 221 276 C238 245 270 245 282 262" />
					<path className="brain-fold-line" d="M166 331 C195 302 232 310 234 344 C250 323 268 323 283 337" />
					<path className="brain-fold-line" d="M409 225 C445 220 474 244 469 274 M399 354 C431 365 459 344 461 316" />
				</g>

				<g className="eye-illustration" filter="url(#gate-shadow)">
					<path className="eye-paper-shadow" d="M536 255 C596 166 806 160 923 250 C839 353 632 359 536 255 Z" />
					<path className="eye-paper" d="M526 243 C588 153 799 149 917 240 C831 344 621 348 526 243 Z" />
					<g clipPath="url(#gate-eye-clip)">
						<g className="eye-ball" ref={ eyeRef }>
							<circle className="iris-outer" cx="724" cy="246" r="75" />
							<circle className="iris-middle" cx="724" cy="246" r="57" />
							<circle className="iris-ring" cx="724" cy="246" r="42" />
							<circle className="pupil" cx="724" cy="246" r="25" />
							<circle className="eye-glint" cx="702" cy="222" r="10" />
							<circle className="eye-glint-small" cx="742" cy="265" r="5" />
						</g>
						<path className="brain-gate-eyelid" d="M526 243 C588 153 799 149 917 240 C831 344 621 348 526 243 Z" />
					</g>
					<path className="eye-outline" d="M526 243 C588 153 799 149 917 240 C831 344 621 348 526 243 Z" />
					<path className="eye-detail" d="M551 224 C628 161 805 158 891 222 M551 264 C632 326 806 328 891 262" />
					<path className="eye-lashes" d="M575 188 L553 158 M629 164 L617 129 M690 151 L686 114 M756 151 L762 114 M819 164 L833 129 M870 188 L895 160" />
				</g>

				<g className="brain-gate-scribbles">
					<path d="M476 129 C510 108 545 112 568 132" />
					<path d="M480 141 C520 123 550 129 575 150" />
					<text x="494" y="105">Auckland, New Zealand</text>
					<path d="M496 367 C560 383 609 378 652 359" />
					<text x="502" y="401">design + engineering</text>
				</g>
			</svg>

			<div className="gate-tape gate-tape-one" aria-hidden="true" />
			<div className="gate-tape gate-tape-two" aria-hidden="true" />
			<div className="gate-label gate-label-two">3D animation &amp; VFX</div>
			<div className="gate-label gate-label-three">Mi Casa: 8 mini-games</div>
			<div className="gate-label gate-label-four">Google Play campaigns</div>
			<div className="gate-label gate-label-five">dancing, food &amp; outdoors</div>

			{ factVisible ? (
				<aside className="brain-gate-fact" aria-live="polite">
					<button type="button" onClick={ () => setFactVisible(false) } aria-label="Close note">×</button>
					<span>note to self / { heroFacts[factIndex].marker }</span>
					<strong>{ heroFacts[factIndex].title }</strong>
					<p>{ heroFacts[factIndex].text }</p>
				</aside>
			) : null }

			<div className="gate-entry">
				<a className="primary-button" href="#selected-work">
					Explore selected work <span aria-hidden="true">↓</span>
				</a>
			</div>
		</div>
	);
}
