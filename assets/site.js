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

  /* ---- The massage on the home page ---- */
  var M = SITE.massage || {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-massage-meta]"), function (el) {
    el.textContent = (M.duration || "") + " · " + (M.price || "");
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-price]"), function (el) {
    el.textContent = M.price || "";
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
      var home = form.querySelector("input[name=where]:checked").value === "home";
      addrWrap.hidden = !home;
      addr.required = home;
    }
    Array.prototype.forEach.call(form.querySelectorAll("input[name=where]"), function (r) {
      r.addEventListener("change", syncWhere);
    });
    syncWhere();

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
      var focus = fSel ? fSel.options[fSel.selectedIndex].text : "–";
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
        "Preferred date": fd.get("date"),
        "Preferred time": fd.get("time"),
        "Focus": focus,
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
