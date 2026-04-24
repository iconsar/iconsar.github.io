(function () {
	"use strict";

	// ---- Reveal on scroll ----
	var revealTargets = document.querySelectorAll(".reveal, .reveal-stagger");
	if ("IntersectionObserver" in window && revealTargets.length) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
		revealTargets.forEach(function (el) { io.observe(el); });
	} else {
		revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
	}

	// ---- Theme toggle ----
	var root = document.documentElement;
	var btn = document.querySelector("[data-theme-toggle]");
	var label = document.querySelector("[data-theme-label]");

	function applyLabel(theme) {
		if (!label) return;
		label.textContent = theme === "night" ? "Edición diurna" : "Edición nocturna";
	}

	applyLabel(root.getAttribute("data-theme"));

	if (btn) {
		btn.addEventListener("click", function () {
			var current = root.getAttribute("data-theme") === "night" ? "night" : "day";
			var next = current === "night" ? "day" : "night";
			root.setAttribute("data-theme", next);
			applyLabel(next);
			try { localStorage.setItem("icon-theme", next); } catch (e) {}
		});
	}
})();
