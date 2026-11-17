# Slow Space – massage website

A static website (plain HTML, CSS and a little JavaScript) for a massage practice in Berlin, hosted for free on GitHub Pages. There is no build step: what's in this folder is what goes online.

| Page | File |
|---|---|
| English home page | `index.html` |
| German home page | `de/index.html` |
| Request form (EN / DE) | `book.html` / `de/book.html` |
| Impressum | `impressum.html` |
| Datenschutz | `datenschutz.html` |

## Everyday edits

- **Massage duration, price, techniques and focus choices:** edit `treatments.js`. Both languages read from it.
- **Text on the pages:** edit `index.html` (English) and `de/index.html` (German). Search for `[` to find every placeholder, such as `[NAME]`, `[DISTRICT]`, `[PRICE]` and `[PHOTO]`.
- **Colours:** at the top of `assets/style.css` (`--accent` is the amber).
- **Photo:** put e.g. `photo.jpg` into `assets/`, then in both home pages replace
  `<div class="photo" ...>[PHOTO]</div>` with
  `<div class="photo"><img src="assets/photo.jpg" alt="..." width="600" height="800" loading="lazy"></div>`
  (in `de/index.html` the path is `../assets/photo.jpg`).

You can edit any file directly on github.com (open the file and click the pencil icon). The site updates about a minute after you save.

## Session requests (Web3Forms)

Customers request a session on `book.html` (German: `de/book.html`). The request is emailed to you, and you confirm by email or phone.

1. Go to **web3forms.com**, enter the email address where requests should arrive, and copy the **access key** they email you.
2. Paste it into `formAccessKey` at the top of `treatments.js`.
3. Send yourself a test request.

Free plan: 250 requests per month. Until the key is set, the form shows a "not connected yet" message.

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
