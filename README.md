# Ruhe – massage website

A static website (plain HTML, CSS and a little JavaScript) for a massage practice in Berlin, hosted for free on GitHub Pages. There is no build step: what's in this folder is what goes online.

| Page | File |
|---|---|
| English home page | `index.html` |
| German home page | `de/index.html` |
| Impressum | `impressum.html` |
| Datenschutz | `datenschutz.html` |

## Everyday edits

- **Treatments, durations and prices:** edit `treatments.js`. Both languages read from it.
- **Text on the pages:** edit `index.html` (English) and `de/index.html` (German). Search for `[` to find every placeholder, such as `[NAME]`, `[DISTRICT]`, `[PRICE]` and `[PHOTO]`.
- **Colours:** at the top of `assets/style.css` (`--accent` is the amber).
- **Photo:** put e.g. `photo.jpg` into `assets/`, then in both home pages replace
  `<div class="photo" ...>[PHOTO]</div>` with
  `<div class="photo"><img src="assets/photo.jpg" alt="..." width="600" height="800" loading="lazy"></div>`
  (in `de/index.html` the path is `../assets/photo.jpg`).

You can edit any file directly on github.com (open the file and click the pencil icon). The site updates about a minute after you save.

## Booking (Cal.com)

1. Create a free account at cal.com and connect your calendar.
2. Create one **event type per treatment**. The event slug (the last part of its link) must match `calEvent` in `treatments.js`, e.g. `cal.com/yourname/classic`.
3. In each event type, under **Location**, add two options:
   - *In person (organizer address)*: the studio address
   - *In person (attendee address)*: the client enters their address
4. Optional: in Cal.com → Settings → Appearance, set the brand colour to `#E0A458` and the dark theme.
5. Put your Cal.com username into `calUsername` at the top of `treatments.js`.

Until the username is set, the booking buttons simply link to cal.com. Once it's set, booking opens in a pop-up on the site. The Cal.com script only loads when someone clicks a booking button, which is better for privacy and keeps the page fast.

## Fonts (self-hosted, for GDPR)

The site uses **Italiana** (headings) and **Figtree** (text). For privacy reasons in Germany they are not loaded from Google. Instead, download them once and put them into `fonts/`:

1. Open https://gwfh.mranftl.com/fonts, choose **Italiana** (regular) and **Figtree** (regular and 600), charset *latin*, format *woff2*.
2. Rename the files to `italiana-regular.woff2`, `figtree-regular.woff2` and `figtree-600.woff2`, then upload them to the `fonts/` folder.

Until then, the site falls back to similar system fonts.

## Publishing on GitHub Pages

Repository → **Settings → Pages** → *Build and deployment*: **Deploy from a branch**, branch `main`, folder `/ (root)`. The site appears at `https://<username>.github.io/<repository>/`.

**Own domain (optional):** add the domain under Settings → Pages → *Custom domain*, and create the DNS records your domain provider asks for (GitHub shows them). Tick **Enforce HTTPS**.

## Legal

`impressum.html` and `datenschutz.html` are **templates**. Fill in every `[...]` placeholder and have them checked, for example with a generator such as e-recht24.de or by a lawyer, before the site goes public.
