import {
	j as e,
	m as n
}
from "../../assets/proxy.js";
import {
	r as a
}
from "../../useScreenInit.js";

function d() {
	const r = "MORGAN",
		l = "Source Code, Summoned.",
		[o, c] = a.useState(""),
		[m, s] = a.useState(!1);
	return a.useEffect(() => {
		let t = 0;
		const i = setInterval(() => {
			t < l.length ? (c(l.slice(0, t + 1)), t++) : (clearInterval(i), setInterval(() => {
				s(!0), setTimeout(() => s(!1), 200)
			}, 3e3))
		}, 100);
		return () => clearInterval(i)
	}, []), e.jsxs("div", {
		className: "relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center",
		children: [e.jsx(n.h1, {
			className: "font-display text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-electric-purple glow-text-purple mb-6",
			initial: {
				opacity: 0,
				filter: "blur(20px)",
				scale: .9
			},
			animate: {
				opacity: 1,
				filter: "blur(0px)",
				scale: 1
			},
			transition: {
				duration: 1.5,
				ease: "easeOut"
			},
			children: r.split("")
				.map((t, i) => e.jsx(n.span, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: i * .1 + .5,
						duration: .8
					},
					className: "inline-block",
					children: t === " " ? " " : t
				}, i))
		}), e.jsx("div", {
			className: "h-8",
			children: e.jsxs(n.p, {
				className: `font-mono text-xl md:text-2xl text-neon-lime drop-shadow-[0_0_8px_var(--neon-lime)] ${m?"animate-glitch":""}`,
				children: [o, e.jsx(n.span, {
					animate: {
						opacity: [1, 0]
					},
					transition: {
						repeat: 1 / 0,
						duration: .8
					},
					className: "inline-block w-3 h-6 bg-neon-lime ml-1 align-middle"
				})]
			})
		})]
	})
}
export {
	d as H
};
