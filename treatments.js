/* =====================================================================
   EDIT THIS FILE to change treatments, durations, prices and booking.
   Both the English and the German page read from here.
   ---------------------------------------------------------------------
   formAccessKey : the key from web3forms.com (requests are emailed to you)
   id            : short name used in links, lowercase, no spaces
   duration    : shown as written, e.g. "60 / 90 min"
   price       : shown as written, e.g. "70 € / 95 €"
   To remove a treatment, delete its { ... } block.
   To add one, copy a block and change the text.
   ===================================================================== */

window.SITE = {
  formAccessKey: "dd3d4268-493a-449b-84b3-a080291a1803",

  treatments: [
    {
      id: "classic",
      name: { en: "Classic massage", de: "Klassische Massage" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Full-body massage with classic strokes to loosen tension and help you unwind.",
        de: "Ganzkörpermassage mit klassischen Griffen, die Verspannungen löst und Sie zur Ruhe kommen lässt."
      }
    },
    {
      id: "back-neck",
      name: { en: "Back, neck & shoulders", de: "Rücken-Nacken-Schulter" },
      duration: "[30 / 45 min]",
      price: "[PRICE]",
      desc: {
        en: "Focused work where desk days and stress settle most. Also ideal as a short session at the office.",
        de: "Gezielte Massage dort, wo sich Schreibtischtage und Stress am meisten festsetzen. Auch ideal als kurze Massage im Büro."
      }
    },
    {
      id: "deep-tissue",
      name: { en: "Deep tissue", de: "Tiefenmassage" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Slow, firm pressure for deep muscle tension and stubborn knots.",
        de: "Langsamer, kräftiger Druck für tiefe Muskelverspannungen und hartnäckige Knoten."
      }
    },
    {
      id: "sport",
      name: { en: "Sport massage", de: "Sportmassage" },
      duration: "[45 / 60 min]",
      price: "[PRICE]",
      desc: {
        en: "Firm, activating massage before or after training, for tired, hard-working muscles.",
        de: "Kräftige, aktivierende Massage vor oder nach dem Training, für müde, beanspruchte Muskeln."
      }
    },
    {
      id: "thai",
      name: { en: "Traditional Thai massage", de: "Traditionelle Thaimassage" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Pressure and gentle stretches on a mat, in comfortable clothes.",
        de: "Druck und sanfte Dehnungen auf der Matte, in bequemer Kleidung."
      }
    },
    {
      id: "lomi-lomi",
      name: { en: "Hawaiian Lomi Lomi", de: "Hawaiianische Massage (Lomi Lomi)" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Long, wave-like strokes with the forearms, flowing over the whole body.",
        de: "Lange, wellenartige Streichungen mit den Unterarmen, fließend über den ganzen Körper."
      }
    },
    {
      id: "foot-reflexology",
      name: { en: "Foot reflexology", de: "Fußreflexzonenmassage" },
      duration: "[30 / 45 min]",
      price: "[PRICE]",
      desc: {
        en: "Precise pressure on the zones of the feet. Deeply calming and grounding.",
        de: "Gezielter Druck auf die Zonen der Füße. Tief beruhigend und erdend."
      }
    },
    {
      id: "legs-feet",
      name: { en: "Legs & feet", de: "Bein- und Fußmassage" },
      duration: "[30 / 45 min]",
      price: "[PRICE]",
      desc: {
        en: "For heavy, tired legs and feet after long days of standing, walking or sport.",
        de: "Für schwere, müde Beine und Füße nach langem Stehen, Gehen oder Sport."
      }
    }
  ]
};
