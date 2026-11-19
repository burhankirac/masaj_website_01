/* =====================================================================
   EDIT THIS FILE to change the duration, price and booking settings.
   Both the English and the German page read from here.
   ---------------------------------------------------------------------
   formAccessKey : the key from web3forms.com (requests are emailed to you)
   massage       : the one Slow Space Massage. duration, price, priceNote
                   and packagePrice (4 sessions) are shown as written
   techniques    : the techniques listed under the massage
   focus         : the choices in "What would you like the focus to be?"
   ===================================================================== */

window.SITE = {
  formAccessKey: "dd3d4268-493a-449b-84b3-a080291a1803",

  massage: {
    name: { en: "The Slow Space Massage", de: "Die Slow Space Massage" },
    duration: { en: "90-minute session · 80 min massage", de: "90-Minuten-Termin · 80 Min Massage" },
    price: "70 €",
    priceNote: { en: "Get-to-know price until 31 January 2027, then 95 €", de: "Kennenlernpreis bis 31. Januar 2027, danach 95 €" },
    packagePrice: "280 €"
  },

  techniques: [
    { en: "Classic massage", de: "Klassische Massage" },
    { en: "Back, neck & shoulders", de: "Rücken-Nacken-Schulter" },
    { en: "Face massage", de: "Gesichtsmassage" },
    { en: "Deep tissue", de: "Tiefenmassage" },
    { en: "Fascia massage", de: "Faszienmassage" },
    { en: "Sport massage", de: "Sportmassage" },
    { en: "Thai massage", de: "Thaimassage" },
    { en: "Hawaiian Lomi Lomi", de: "Hawaiianische Lomi-Lomi-Massage" },
    { en: "Foot reflexology", de: "Fußreflexzonenmassage" },
    { en: "Legs & feet", de: "Bein- und Fußmassage" }
  ],

  focus: [
    { id: "relax", en: "Deep relaxation", de: "Tiefe Entspannung" },
    { id: "back", en: "Back, neck & shoulders", de: "Rücken, Nacken, Schultern" },
    { id: "legs", en: "Legs & feet", de: "Beine und Füße" },
    { id: "sport", en: "After sport", de: "Nach dem Sport" },
    { id: "unsure", en: "Not sure yet, let's talk", de: "Noch unsicher, besprechen wir vor Ort" }
  ]
};
