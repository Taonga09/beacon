# BEACON Website: Flask + VS Code Code Prompt

Fill in every [BRACKETED] item, then paste everything inside the block below into your AI coding assistant.

```text
You are an expert Python Flask developer. Build a complete, production-ready
multi-page website called "BEACON" that I can open and run in VS Code.

## Business details
- Business name: BEACON
- What it does: [e.g., a salon / printing shop / tutoring service]
- Tagline: [YOUR TAGLINE]
- Address: [YOUR ADDRESS]
- WhatsApp number: [+267 XXXXXXXX]
- Email: [YOUR EMAIL]
- Opening hours: [e.g., Mon-Fri 8:00-17:00, Sat 9:00-13:00]

## Tech stack
- Python 3.11+, Flask, Jinja2 templates
- HTML5, CSS3 (custom, no heavy frameworks), minimal vanilla JavaScript
- No database required: store the price list and gallery data in a
  `data.json` or Python dictionary so I can edit them easily

## Pages
1. Home: hero section, short intro, featured services, call-to-action button
2. About: story, mission, team
3. Services & Price List: table/cards loaded from data.json
4. Gallery: photo grid with lightbox, images from /static/images
5. Contact: contact form (name, email, message) with server-side validation,
   plus map embed placeholder, address, hours
6. Custom 404 page

## Features
- Floating "Chat on WhatsApp" button on every page, using
  https://wa.me/[NUMBER]?text=Hello%20BEACON
- Responsive, mobile-first layout with a hamburger menu
- Shared base.html with header, footer, and navigation (active link highlight)
- Flash messages for form success/error
- SEO basics: page titles, meta descriptions, favicon
- Config (business name, phone, address) in one config.py so I change it once

## Project structure
beacon/
  app.py
  config.py
  data.json
  requirements.txt
  README.md
  templates/ (base.html, index.html, about.html, services.html,
              gallery.html, contact.html, 404.html)
  static/ (css/style.css, js/main.js, images/)

## Design
- Modern, clean look. Colors: [PRIMARY COLOR] and [ACCENT COLOR]
- Font: Google Fonts "[FONT NAME]"
- Include placeholder images and clearly marked spots to replace them

## VS Code setup (include in README.md)
- Create a virtual environment: python -m venv .venv
- Activate it (Windows PowerShell and macOS/Linux commands)
- pip install -r requirements.txt
- Run: python app.py, then open http://127.0.0.1:5000
- Recommended VS Code extensions (Python, Pylance, Jinja)
- A .vscode/launch.json for debugging Flask
- How to add photos, edit prices, and change the WhatsApp number

## Output requirements
- Give me every file in full, with the file path as a heading above each
  code block. No placeholders like "rest of code here".
- Comment the code so a beginner can follow it.
- After the code, list any steps I must do manually.
- Before finishing, check for bugs: missing imports, wrong template names,
  broken url_for() calls.
```

## Tips
- Replace every bracketed item. The more specific the business details, the less generic the site.
- For a different style, add a line like "Design inspired by a dark, minimal portfolio" or "warm and friendly like a local bakery."
- To build in stages, send the prompt up to the Pages section first, then follow up with "now add the contact form and WhatsApp button."
- If something breaks, paste the full terminal error back to the assistant and ask it to fix that file.
