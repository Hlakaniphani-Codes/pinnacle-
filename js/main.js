/* Pinnacle Recruitment Group */
(function () {
  "use strict";

  /* Mobile drawer */
  var toggle = document.querySelector(".nav__toggle");
  var drawer = document.querySelector(".drawer");
  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    document.body.classList.remove("lock");
  }
  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      drawer.classList.add("open");
      document.body.classList.add("lock");
    });
    drawer.querySelectorAll("a, [data-close]").forEach(function (el) {
      el.addEventListener("click", closeDrawer);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
  }

  /* Active nav link */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__menu a, .drawer a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.classList.add("is-active");
  });

  /* Scroll progress bar */
  var bar = document.querySelector(".scroll-progress");
  if (bar) {
    var updateBar = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
    };
    updateBar();
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar);
  }

  /* Reveal on scroll (covers .reveal and .stagger), with failsafe */
  var reveals = document.querySelectorAll(".reveal");
  function revealAll() { reveals.forEach(function (el) { el.classList.add("in"); }); }
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    setTimeout(revealAll, 2400);
    window.addEventListener("load", function () { setTimeout(revealAll, 300); });
  } else {
    revealAll();
  }

  /* Animated counters */
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dec = target % 1 !== 0 ? 1 : 0;
        var t0 = null;
        (function tick(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1500, 1);
          var val = target * (1 - Math.pow(1 - p, 3));
          el.textContent = (dec ? val.toFixed(1) : Math.round(val).toLocaleString("en")) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(performance.now());
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Rotating last word in the hero headline */
  var rotator = document.querySelector(".hero__rotator");
  if (rotator) {
    var phrases = ["precisely placed.", "properly vetted.", "ready to work.", "built to last."];
    var i = 0;
    var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      setInterval(function () {
        i = (i + 1) % phrases.length;
        rotator.classList.add("swap");
        setTimeout(function () {
          rotator.textContent = phrases[i];
          rotator.classList.remove("swap");
        }, 300);
      }, 3600);
    }
  }

  /* FAQ */
  document.querySelectorAll(".faq__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq__item");
      var a = item.querySelector(".faq__a");
      var open = item.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : null;
    });
  });

  /* Demo forms */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.querySelector(".form-ok");
      if (ok) { ok.classList.add("show"); ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  });

  /* Year */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
