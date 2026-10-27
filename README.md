# BEACON Learning Studio

BEACON is a standalone, multi-page website. It uses plain HTML, CSS, and JavaScript with local photos. There is no Flask dependency, backend, or web server.

## Open the website

1. Open this folder in VS Code.
2. Run `python app.py` in the integrated terminal. The launcher opens `index.html` in your default browser and does not start a server.
3. If your environment cannot open a browser automatically, open `index.html` directly from the file manager or browser.

You can also open `index.html` directly; the website does not require Python to display. No virtual environment or package installation is needed.

## Make it yours

- **Business details, services, team, and gallery:** Edit `static/js/site-data.js`. Keep `phoneDigits` to country code and digits only, such as `26771234567`. Prices are display text, so include the currency.
- **Photos:** Replace files in `static/images/` while keeping the filenames listed in `site-data.js`, or change those filenames there. Update each image's `alt` text and caption. The bundled Unsplash photos are examples; replace them before publishing.
- **Map:** Update `mapUrl` and `mapEmbedUrl` in `static/js/site-data.js` for your location.
- **Contact form:** The form validates in the browser and opens a prefilled email in the visitor's default mail app. The visitor must press Send in that app. A standalone site cannot send or store messages securely by itself. To send messages directly from the website, connect a form provider or backend and update the form script.
- **Styles:** Edit `static/css/style.css`. The site uses DM Sans and Fraunces from Google Fonts when internet access is available, with local system-font fallbacks.

## Publish the site

Upload the HTML files and `static/` folder to any static website host. The host should serve `404.html` for unknown pages. Google Fonts, the map embed, WhatsApp, and email handoff need internet access; the local photos and pages work offline.

## Pages

- `index.html` Home
- `about.html` About and team
- `services.html` Services and prices
- `gallery.html` Photo gallery with lightbox
- `contact.html` Contact form and business details
- `404.html` Custom not-found page for static hosts
