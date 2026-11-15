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
      name: { en: "Classic", de: "Klassische Massage" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Full-body massage to loosen tension and calm the nervous system.",
        de: "Ganzkörpermassage, die Verspannungen löst und das Nervensystem beruhigt."
      }
    },
    {
      id: "face-glow",
      name: { en: "Face Glow", de: "Face Glow" },
      duration: "[45 min]",
      price: "[PRICE]",
      desc: {
        en: "Gentle face, neck and scalp massage for a rested, fresh look.",
        de: "Sanfte Massage von Gesicht, Nacken und Kopfhaut für einen frischen, erholten Ausdruck."
      }
    },
    {
      id: "free-flow",
      name: { en: "Free Flow", de: "Free Flow" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Intuitive, flowing strokes shaped by how your body feels today.",
        de: "Intuitive, fließende Griffe, abgestimmt darauf, wie sich Ihr Körper heute anfühlt."
      }
    },
    {
      id: "deep-tissue",
      name: { en: "Deep Tissue", de: "Deep Tissue" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Slow, firm pressure for deep muscle tension and stubborn knots.",
        de: "Langsamer, kräftiger Druck für tiefe Muskelverspannungen und hartnäckige Knoten."
      }
    },
    {
      id: "foot-massage",
      name: { en: "Foot massage", de: "Fußmassage" },
      duration: "[30 / 45 min]",
      price: "[PRICE]",
      desc: {
        en: "Focused work on the feet. Grounding and deeply restful.",
        de: "Gezielte Massage der Füße. Erdend und tief entspannend."
      }
    },
    {
      id: "thai",
      name: { en: "Thai", de: "Thai-Massage" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Pressure and gentle stretches on a mat, in comfortable clothes.",
        de: "Druck und sanfte Dehnungen auf der Matte, in bequemer Kleidung."
      }
    },
    {
      id: "legs",
      name: { en: "Legs", de: "Beinmassage" },
      duration: "[30 / 45 min]",
      price: "[PRICE]",
      desc: {
        en: "For heavy, tired legs after long days of standing, walking or sport.",
        de: "Für schwere, müde Beine nach langem Stehen, Gehen oder Sport."
      }
    },
    {
      id: "ortho-bionomy",
      name: { en: "Ortho-Bionomy", de: "Orthobionomie" },
      duration: "[60 min]",
      price: "[PRICE]",
      desc: {
        en: "Soft, non-forcing positioning that helps the body release on its own.",
        de: "Sanfte, nicht forcierende Lagerungen, die dem Körper helfen, sich selbst zu lösen."
      }
    },
    {
      id: "lomi-lomi",
      name: { en: "Lomi Lomi", de: "Lomi Lomi" },
      duration: "[60 / 90 min]",
      price: "[PRICE]",
      desc: {
        en: "Hawaiian massage with long, wave-like forearm strokes.",
        de: "Hawaiianische Massage mit langen, wellenartigen Streichungen der Unterarme."
      }
    }
  ]
};
