/* ==========================================================================
   script.js — All interactivity (vanilla JS, no libraries)
   --------------------------------------------------------------------------
   Handles: dark-mode toggle, mobile menu, scroll-reveal animations,
   auto-updating footer year, and the contact form fallback.
   You normally won't need to edit this file.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. DARK / LIGHT MODE TOGGLE ---------- */
  // The saved preference is read in <head> to avoid a flash. Here we toggle it.
  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var root = document.documentElement;
      root.classList.toggle("dark");
      // Remember the choice for next visit
      localStorage.theme = root.classList.contains("dark") ? "dark" : "light";
    });
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
    // Close the menu after tapping any link inside it
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      });
    });
  }

  /* ---------- 3. SCROLL-REVEAL ANIMATIONS ---------- */
  // Adds the "is-visible" class when an element with .reveal scrolls into view.
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback for very old browsers: just show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 4. AUTO-UPDATE FOOTER YEAR ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- 5. CONTACT FORM (mailto fallback) ----------
     This opens the visitor's email client with the message pre-filled.
     If you switch to Formspree (see the comment in index.html), DELETE
     this whole block so the form posts normally. */
  var form = document.getElementById("contact-form");
  if (form && !form.getAttribute("action")) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = encodeURIComponent(document.getElementById("name").value);
      var email = encodeURIComponent(document.getElementById("email").value);
      var message = encodeURIComponent(document.getElementById("message").value);
      // EDIT: your destination email address
      var to = "arnoldhe2006@gmail.com";
      var subject = "Portfolio inquiry from " + decodeURIComponent(name);
      var body = "From: " + decodeURIComponent(name) + " (" + decodeURIComponent(email) + ")%0D%0A%0D%0A" + message;
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + body;
    });
  }
});
