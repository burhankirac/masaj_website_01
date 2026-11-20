(function () {
  "use strict";
  var SITE = window.SITE || { treatments: [] };
  var lang = (document.documentElement.lang || "en").slice(0, 2) === "de" ? "de" : "en";
  var T = {
    en: {
      request: "Request", requestName: "Request {name}", notSure: "Not sure yet",
      sending: "Sending…", notReady: "The request form isn't connected yet. Please contact us by email for now.",
      failed: "Sorry, something went wrong. Please try again or contact us by email.",
      subject: "New session request", studio: "Studio", home: "At the client's place"
    },
    de: {
      request: "Anfragen", requestName: "{name} anfragen", notSure: "Noch unsicher",
      sending: "Wird gesendet …", notReady: "Das Anfrageformular ist noch nicht verbunden. Bitte schreiben Sie vorerst eine E-Mail.",
      failed: "Leider hat etwas nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie eine E-Mail.",
      subject: "Neue Terminanfrage", studio: "Studio", home: "Hausbesuch"
    }
  }[lang];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function nameOf(t) { return t.name[lang] || t.name.en; }
  var bookPage = document.body.getAttribute("data-book-page") || "book.html";


  /* ---- Sticky header: slimmer once the page is scrolled ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    /* Two thresholds so the header can't flip back and forth when it changes height */
    var onScroll = function () {
      var y = window.scrollY;
      if (y > 40) header.classList.add("scrolled");
      else if (y < 5) header.classList.remove("scrolled");
    };
    /* Logo: back to the very top (no jump to an element inside the fixed header) */
    var logo = header.querySelector('.logo[href="#"]');
    if (logo) logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }



  /* ---- Opened at a section (e.g. after a language switch): jump there instantly, no slow scroll ---- */
  if (window.location.hash && document.getElementById(window.location.hash.slice(1))) {
    var root = document.documentElement;
    root.style.scrollBehavior = "auto";
    document.getElementById(window.location.hash.slice(1)).scrollIntoView();
    window.addEventListener("load", function () {
      document.getElementById(window.location.hash.slice(1)).scrollIntoView();
      setTimeout(function () { root.style.scrollBehavior = ""; }, 50);
    });
  }

  /* ---- Language switch: stay in the same section instead of jumping to the top ---- */
  Array.prototype.forEach.call(document.querySelectorAll(".lang a"), function (a) {
    if (a.getAttribute("aria-current") === "true") return;
    a.addEventListener("click", function (e) {
      /* Request page: remember scroll position and what was already typed */
      var rf = document.getElementById("request-form");
      if (rf) {
        try {
          var fields = {};
          Array.prototype.forEach.call(rf.elements, function (el) {
            if (!el.name || el.name === "botcheck" || el.name === "consent") return;
            if (el.type === "radio") { if (el.checked) fields[el.name] = el.value; }
            else if (el.type === "checkbox") fields[el.name] = el.checked;
            else if (el.tagName === "SELECT") fields[el.name] = el.selectedIndex;
            else fields[el.name] = el.value;
          });
          sessionStorage.setItem("ss-request", JSON.stringify({ y: window.scrollY, fields: fields, t: Date.now() }));
        } catch (err) {}
        return;
      }
      var sections = document.querySelectorAll("main section[id]");
      if (!sections.length || window.scrollY < 80) return;
      var current = null;
      Array.prototype.forEach.call(sections, function (sec) {
        if (sec.getBoundingClientRect().top <= window.innerHeight * 0.35) current = sec;
      });
      if (!current) return;
      e.preventDefault();
      window.location.href = a.getAttribute("href").split("#")[0] + "#" + current.id;
    });
  });

  /* ---- The massage on the home page ---- */
  var M = SITE.massage || {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-massage-meta]"), function (el) {
    var dur = M.duration ? (M.duration[lang] || M.duration.en || M.duration) : "";
    el.textContent = dur + " · " + (M.price || "");
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-price]"), function (el) {
    el.textContent = M.price || "";
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-package-price]"), function (el) {
    el.textContent = M.packagePrice || "";
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-price-note]"), function (el) {
    el.textContent = M.priceNote ? (M.priceNote[lang] || M.priceNote.en) : "";
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-techniques]"), function (el) {
    el.innerHTML = (SITE.techniques || []).map(function (t) {
      return "<li>" + esc(t[lang] || t.en) + "</li>";
    }).join("");
  });

  /* ---- Focus selects (home box + request form) ---- */
  Array.prototype.forEach.call(document.querySelectorAll("select[data-focus]"), function (sel) {
    sel.innerHTML = (SITE.focus || []).map(function (f) {
      return '<option value="' + esc(f.id) + '">' + esc(f[lang] || f.en) + '</option>';
    }).join("");
  });

  /* ---- Request form ---- */
  var form = document.getElementById("request-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var fParam = params.get("focus");
    var fSel = form.querySelector("select[name=focus]");
    if (fParam && fSel && fSel.querySelector('option[value="' + CSS.escape(fParam) + '"]')) fSel.value = fParam;
    var wParam = params.get("where");
    if (wParam === "home" || wParam === "studio") {
      var r = form.querySelector('input[name=where][value="' + wParam + '"]');
      if (r) r.checked = true;
    }

    var dateInput = form.querySelector("input[type=date]");
    if (dateInput) {
      var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
      dateInput.min = d.toISOString().slice(0, 10);
    }

    var addrWrap = document.getElementById("address-field");
    var addr = form.querySelector("input[name=address]");
    function syncWhere() {
      var w = form.querySelector("input[name=where]:checked") || form.querySelector("input[name=where]");
      var home = w.value === "home";
      var msg = document.getElementById("f-message");
      if (msg && msg.dataset.phHome) msg.placeholder = home ? msg.dataset.phHome : msg.dataset.phStudio;
      addrWrap.hidden = !home;
      var tableWrap = document.getElementById("table-field");
      if (tableWrap) {
        tableWrap.hidden = !home;
        tableWrap.querySelector("input").required = home;
      }
      addr.required = home;
      Array.prototype.forEach.call(form.querySelectorAll("[data-home-only]"), function (el) { el.hidden = !home; });
    }
    Array.prototype.forEach.call(form.querySelectorAll("input[name=where]"), function (r) {
      r.addEventListener("change", syncWhere);
    });
    syncWhere();

    /* Coming from the other language: restore what was typed and the scroll position, instantly */
    try {
      var saved = JSON.parse(sessionStorage.getItem("ss-request") || "null");
      sessionStorage.removeItem("ss-request");
      if (saved && Date.now() - saved.t < 60000) {
        Array.prototype.forEach.call(form.elements, function (el) {
          if (!el.name || !(el.name in saved.fields)) return;
          var v = saved.fields[el.name];
          if (el.type === "radio") el.checked = (el.value === v);
          else if (el.type === "checkbox") el.checked = !!v;
          else if (el.tagName === "SELECT") el.selectedIndex = v;
          else el.value = v;
        });
        syncWhere();
        var rootEl = document.documentElement;
        rootEl.style.scrollBehavior = "auto";
        window.scrollTo(0, saved.y);
        window.addEventListener("load", function () {
          window.scrollTo(0, saved.y);
          setTimeout(function () { rootEl.style.scrollBehavior = ""; }, 50);
        });
      }
    } catch (err) {}

    var status = document.getElementById("form-status");
    var btn = form.querySelector("button[type=submit]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!SITE.formAccessKey || SITE.formAccessKey.indexOf("YOUR-") === 0) {
        status.textContent = T.notReady; status.className = "form-status error"; return;
      }
      var fd = new FormData(form);
      if (fd.get("botcheck")) return;
      var where = fd.get("where") === "home" ? T.home : T.studio;
      var payload = {
        access_key: SITE.formAccessKey,
        subject: T.subject + " · " + fd.get("date"),
        from_name: "Slow Space website",
        replyto: fd.get("email"),
        "Name": fd.get("name"),
        "Email": fd.get("email"),
        "Phone": fd.get("phone") || "–",
        "Where": where,
        "Address": fd.get("where") === "home" ? fd.get("address") : "–",
        "Massage table": fd.get("has_table") ? "yes" : "–",
        "Preferred date": fd.get("date"),
        "Preferred time": fd.get("time"),
        "Message": fd.get("message") || "–",
        "Language": lang.toUpperCase()
      };
      btn.disabled = true; var label = btn.textContent; btn.textContent = T.sending;
      status.textContent = ""; status.className = "form-status";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (!res.success) throw new Error(res.message || "error");
        form.hidden = true;
        var ok = document.getElementById("form-success");
        ok.hidden = false; ok.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }).catch(function () {
        status.textContent = T.failed; status.className = "form-status error";
        btn.disabled = false; btn.textContent = label;
      });
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
