/* =====================================================================
   EDIT THIS FILE to change the duration, price and booking settings.
   The English, German and Turkish pages read from here.
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
    name: { en: "The Slow Space Massage", de: "Die Slow Space Massage", tr: "Slow Space Masajı" },
    duration: { en: "90-minute session · 80 min massage", de: "90-Minuten-Termin · 80 Min Massage", tr: "90 dakikalık seans · 80 dk masaj" },
    price: "70 €",
    priceNote: { en: "Get-to-know price until 31 January 2027, then 95 €", de: "Kennenlernpreis bis 31. Januar 2027, danach 95 €", tr: "31 Ocak 2027'ye kadar tanışma fiyatı, sonrasında 95 €" },
    packagePrice: "280 €"
  },

  techniques: [
    { en: "Classic massage", de: "Klassische Massage", tr: "Klasik masaj" },
    { en: "Back, neck & shoulders", de: "Rücken-Nacken-Schulter", tr: "Sırt, boyun ve omuzlar" },
    { en: "Face massage", de: "Gesichtsmassage", tr: "Yüz masajı" },
    { en: "Deep tissue", de: "Tiefenmassage", tr: "Derin doku masajı" },
    { en: "Fascia massage", de: "Faszienmassage", tr: "Fasya masajı" },
    { en: "Sport massage", de: "Sportmassage", tr: "Spor masajı" },
    { en: "Thai massage", de: "Thaimassage", tr: "Thai masajı" },
    { en: "Hawaiian Lomi Lomi", de: "Hawaiianische Lomi-Lomi-Massage", tr: "Hawaii Lomi Lomi masajı" },
    { en: "Foot reflexology", de: "Fußreflexzonenmassage", tr: "Ayak refleksolojisi" },
    { en: "Legs & feet", de: "Bein- und Fußmassage", tr: "Bacak ve ayak masajı" }
  ],

  focus: [
    { id: "relax", en: "Deep relaxation", de: "Tiefe Entspannung", tr: "Derin rahatlama" },
    { id: "back", en: "Back, neck & shoulders", de: "Rücken, Nacken, Schultern", tr: "Sırt, boyun ve omuzlar" },
    { id: "legs", en: "Legs & feet", de: "Beine und Füße", tr: "Bacaklar ve ayaklar" },
    { id: "sport", en: "After sport", de: "Nach dem Sport", tr: "Spordan sonra" },
    { id: "unsure", en: "Not sure yet, let's talk", de: "Noch unsicher, besprechen wir vor Ort", tr: "Henüz emin değilim, birlikte konuşalım" }
  ]
};
