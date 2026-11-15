(function () {
  "use strict";
  var SITE = window.SITE || { treatments: [] };
  var lang = (document.documentElement.lang || "en").slice(0, 2) === "de" ? "de" : "en";
  var T = {
    en: { book: "Book", bookName: "Book {name}" },
    de: { book: "Buchen", bookName: "{name} buchen" }
  }[lang];

  function calLink(event) {
    return SITE.calUsername + "/" + event;
  }
  function calUrl(event) {
    return "https://cal.com/" + calLink(event);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---- Treatment list ---- */
  var list = document.getElementById("treatment-list");
  if (list) {
    list.innerHTML = SITE.treatments.map(function (t) {
      var name = t.name[lang] || t.name.en;
      return '<li class="treatment">' +
        '<div class="treatment-top"><h3>' + esc(name) + '</h3>' +
        '<span class="meta">' + esc(t.duration) + ' · ' + esc(t.price) + '</span></div>' +
        '<p>' + esc(t.desc[lang] || t.desc.en) + '</p>' +
        '<a class="book-link" data-cal-event="' + esc(t.calEvent) + '" href="' + esc(calUrl(t.calEvent)) + '" ' +
        'aria-label="' + esc(T.bookName.replace("{name}", name)) + '">' + esc(T.book) + ' →</a>' +
        '</li>';
    }).join("");
  }

  /* ---- Booking box: treatment select ---- */
  var select = document.getElementById("treatment");
  if (select) {
    select.innerHTML = SITE.treatments.map(function (t) {
      return '<option value="' + esc(t.calEvent) + '">' + esc(t.name[lang] || t.name.en) + '</option>';
    }).join("");
  }

  /* ---- Booking box: studio / at your place ---- */
  var seg = document.querySelectorAll("[data-where]");
  var note = document.getElementById("where-note");
  Array.prototype.forEach.call(seg, function (btn) {
    btn.addEventListener("click", function () {
      Array.prototype.forEach.call(seg, function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      if (note) note.textContent = btn.getAttribute("data-note");
    });
  });

  /* ---- Cal.com: loaded only when someone clicks a booking button ---- */
  function loadCal() {
    if (window.Cal) return;
    (function (C, A, L) {
      var p = function (a, ar) { a.q.push(ar); };
      var d = C.document;
      C.Cal = C.Cal || function () {
        var cal = C.Cal; var ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          var api = function () { p(api, arguments); };
          var namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("ui", { theme: "dark", cssVarsPerTheme: { dark: { "cal-brand": "#E0A458" } }, hideEventTypeDetails: false });
  }

  function openBooking(event, e) {
    if (!SITE.calUsername || SITE.calUsername.indexOf("YOUR-") === 0) return; // not set up yet: follow the link
    if (e) e.preventDefault();
    loadCal();
    window.Cal("modal", { calLink: calLink(event), config: { layout: "month_view" } });
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-cal-event]");
    if (a) openBooking(a.getAttribute("data-cal-event"), e);
  });

  var form = document.getElementById("book-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ev = select ? select.value : SITE.treatments[0].calEvent;
      if (!SITE.calUsername || SITE.calUsername.indexOf("YOUR-") === 0) { window.location.href = calUrl(ev); return; }
      openBooking(ev, null);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
