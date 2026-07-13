/* Osnovna škola Ljubljanica – interactions */
(function () {
  "use strict";

  // ---- mobile navigation ----
  var toggle = document.querySelector(".nav__toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a link is tapped
    document.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    // close on resize to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) body.classList.remove("nav-open");
    });
  }

  // ---- scroll reveal (position based: robust to fast/fling scrolling) ----
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reveals.length) {
    var revealVisible = function () {
      var trigger = window.innerHeight - 60;
      for (var i = reveals.length - 1; i >= 0; i--) {
        var el = reveals[i];
        // reveal anything at or above the trigger line (also covers flung-past elements)
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("in");
          reveals.splice(i, 1);
        }
      }
      if (!reveals.length) {
        window.removeEventListener("scroll", revealVisible);
        window.removeEventListener("resize", revealVisible);
      }
    };
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    revealVisible();
    // safety net: never leave content hidden even if scroll events are missed
    setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add("in"); });
      reveals.length = 0;
    }, 2000);
  }

  // ---- current year in footer ----
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // ---- contact form (demo, no backend) ----
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var note = form.querySelector("[data-form-status]");
      if (note) {
        note.textContent = "Hvala na poruci! Ovo je demonstracijski obrazac – poruka nije poslana.";
        note.style.color = "#3f7a4d";
      }
      form.reset();
    });
  }
})();
