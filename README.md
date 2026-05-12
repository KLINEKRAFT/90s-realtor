# colin-kline-site

A late-90s tribute homepage for **Colin Kline**, Office Manager at the
Coldwell Banker Select South Tulsa office.

Hand-coded GeoCities-style site featuring:

- April 2026 Tulsa-area absorption rates table (14 school districts × 8 price bands)
- Period-correct beveled buttons, marquee ticker, rainbow text, blink tags, hit counter, polaroid photos, and a horizontal groove rule or two
- Zero build step, zero dependencies, single static page

> Best viewed in Netscape Navigator 4.0+ at 800×600.

---

## Live preview

Open `index.html` directly in any modern browser — no server required.

```
file:///path/to/colin-kline-site/index.html
```

For mailto, tel, and most assets to work over the web, host it anywhere
that serves static files.

---

## File structure

```
colin-kline-site/
├── index.html              # The site
├── styles.css              # All styles (90s aesthetic)
├── scripts.js              # Vanilla JS — hit counter, last-updated, Konami
├── assets/
│   ├── cb-select-logo.png  # Coldwell Banker Select official logo
│   ├── colin-desk.jpg      # Colin at his desk
│   ├── colin-plaque.jpg    # 1990 Rookie of the Year
│   ├── colin-handshake.jpg # SOLD! handshake shot
│   ├── colin-clients.jpg   # Showing a S. Tulsa home
│   ├── favicon.ico         # CK monogram favicon
│   └── favicon.png         # PNG fallback
├── README.md               # You are here
├── LICENSE
└── .gitignore
```

Total weight: **~125 KB**. Loads instantly on a 56k modem.

---

## Deployment

### Cloudflare Pages (recommended, matches your other projects)

1. Push this folder to a GitHub repo under `klinekraft`.
2. In the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. **Build settings:**
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Save and deploy. Cloudflare will give you a `*.pages.dev` URL.
5. Add a custom subdomain (e.g. `colin.colinkline.com`) in **Custom domains**.

### Vercel

1. Push to GitHub.
2. In Vercel → Add New → Project → import the repo.
3. **Framework preset:** Other. **Build command:** none. **Output dir:** `./`.
4. Deploy.

### GitHub Pages

1. Push to GitHub.
2. Settings → Pages → Source: `Deploy from a branch` → `main` → `/ (root)`.
3. Save. Site will appear at `https://klinekraft.github.io/colin-kline-site/`.

---

## Editing

Three files do almost everything:

| File         | What it controls                                      |
|--------------|-------------------------------------------------------|
| `index.html` | Content — text, photos, the data table, contact info  |
| `styles.css` | Every visual treatment (bevels, marquee, color codes) |
| `scripts.js` | Hit counter, dynamic "last updated" date, easter egg  |

### Updating the absorption table

Edit the rows inside `<tbody>` in `index.html`. Each cell in the "MOS" column
takes a color class that controls its background:

| Class                  | Range          | Meaning              |
|------------------------|----------------|----------------------|
| `ms-extreme-seller`    | < 2 months     | Extreme seller's market (dark green) |
| `ms-seller`            | 2 – 4 months   | Seller's market (light green) |
| `ms-balanced`          | 4 – 6 months   | Balanced (yellow) |
| `ms-buyer`             | > 6 months     | Buyer's market (red) |
| `ms-na`                | N/A            | No closings, no data (gray) |

Example cell:
```html
<td class="months ms-seller">3.30</td>
```

The two footer rows (`TOTAL OF THESE 14 SDs` and `★ TOTAL IN MLS ★`) also
live in `index.html` — update them when you swap the body rows.

### Changing colors / fonts

`styles.css` is organized in clearly labeled sections. The whole palette
follows Windows 95 system colors:

- Silver background: `#c0c0c0`
- Navy title bars: `#000080`
- Highlight yellow: `#ffff00`
- Hot red: `#ff0000`
- Sellers green: `#00cc00` / `#66ff66`

Don't add `border-radius`. That's not how we did it in '97.

### Hit counter

`scripts.js` reads/writes `localStorage`. The counter is purely client-side
(authentic to the era — real 90s counters were just CGI scripts on the
server reading a `.txt` file). To bump the starting value, edit the
`'13742'` fallback in `scripts.js`.

To reset for yourself:
```js
localStorage.removeItem('colinkline_hits');
sessionStorage.removeItem('colinkline_session');
```

---

## Browser support

Tested in current Chrome, Firefox, Safari, and Edge. CSS Grid is used for
layout — anything from 2018 onward will render correctly. The aesthetic
will gracefully degrade on older browsers (the whole point of the
aesthetic is that it survived a decade of broken renders).

`prefers-reduced-motion` is respected — rainbow, blink, marquee, and pulse
animations all pause for users who've asked their OS to chill.

---

## Credits

- Design system based on `designprompts.dev/retro` (1990s Retro)
- Photos: archival imagery of Colin Kline in his Coldwell Banker Select years
- Logo: Coldwell Banker Select official mark (Anywhere Advisors LLC)
- Data: MLSTulsa Q1 2026 absorption rates
- Hand-coded in Tulsa, Oklahoma by **KLINEKRAFT**

---

## Legal

©2026 Coldwell Banker Select. Owned by a subsidiary of Anywhere Advisors LLC.
Coldwell Banker® and the Coldwell Banker logo are registered service marks
owned by Coldwell Banker Real Estate LLC. Each office is independently
owned and operated. Equal Housing Opportunity. Information deemed reliable
but not guaranteed.

The site code itself is released under the [MIT License](LICENSE).
