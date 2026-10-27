// Render the editable business details and page content without a backend.
const siteData = window.BEACON_DATA;

if (siteData) {
  const { business } = siteData;
  const whatsappUrl = `https://wa.me/${business.phoneDigits}?text=Hello%20BEACON`;

  document.querySelectorAll("[data-business-short-name]").forEach((element) => {
    const sublabel = element.querySelector("small");
    element.textContent = business.shortName;
    if (sublabel) {
      element.append(sublabel);
    }
  });
  document.querySelectorAll("[data-business-tagline]").forEach((element) => {
    element.textContent = business.tagline;
  });
  document.querySelectorAll("[data-business-address]").forEach((element) => {
    element.textContent = business.address;
  });
  document.querySelectorAll("[data-business-email]").forEach((element) => {
    element.href = `mailto:${business.email}`;
    element.textContent = business.email;
  });
  document.querySelectorAll("[data-business-phone]").forEach((element) => {
    element.href = `tel:+${business.phoneDigits}`;
    element.textContent = business.phoneDisplay;
  });
  document.querySelectorAll("[data-whatsapp]").forEach((element) => {
    element.href = whatsappUrl;
  });
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const featuredServices = document.querySelector("#featured-services");
  if (featuredServices) {
    siteData.services.filter((service) => service.featured).forEach((service, index) => {
      const card = document.createElement("article");
      card.className = "service-card";
      card.innerHTML = `<span class="service-index">0${index + 1}</span><h3></h3><p class="service-level"></p><p></p><a href="services.html">See details <span aria-hidden="true">↗</span></a>`;
      card.querySelector("h3").textContent = service.name;
      card.querySelector(".service-level").textContent = service.level;
      card.querySelector("p:last-of-type").textContent = service.description;
      featuredServices.append(card);
    });
  }

  const priceList = document.querySelector("#price-list");
  if (priceList) {
    siteData.services.forEach((service, index) => {
      const row = document.createElement("article");
      row.className = "price-row";
      row.innerHTML = `<div class="price-main"><span class="price-number">0${index + 1}</span><div><h2></h2><p></p></div></div><div class="price-amount"><strong></strong><span></span></div>`;
      row.querySelector("h2").textContent = service.name;
      row.querySelector(".price-main p").textContent = `${service.level} · ${service.description}`;
      row.querySelector(".price-amount strong").textContent = service.price;
      row.querySelector(".price-amount span").textContent = service.unit;
      priceList.append(row);
    });
  }

  const teamGrid = document.querySelector("#team-grid");
  if (teamGrid) {
    siteData.team.forEach((member) => {
      const card = document.createElement("article");
      card.className = "team-card";
      card.innerHTML = `<img src="" alt=""><p class="team-role"></p><h3></h3><p></p>`;
      card.querySelector("img").src = `static/images/${member.image}`;
      card.querySelector("img").alt = `Portrait of ${member.name}`;
      card.querySelector(".team-role").textContent = member.role;
      card.querySelector("h3").textContent = member.name;
      card.querySelector("p:last-child").textContent = member.bio;
      teamGrid.append(card);
    });
  }

  const galleryGrid = document.querySelector("#gallery-grid");
  if (galleryGrid) {
    siteData.gallery.forEach((photo, index) => {
      const button = document.createElement("button");
      button.className = `gallery-item${[1, 4].includes(index) ? " gallery-item-tall" : ""}`;
      button.type = "button";
      button.dataset.lightboxSrc = `static/images/${photo.image}`;
      button.dataset.lightboxAlt = photo.alt;
      button.setAttribute("aria-label", `View photo: ${photo.caption}`);
      button.innerHTML = `<img src="" alt="" loading="lazy"><span></span>`;
      button.querySelector("img").src = button.dataset.lightboxSrc;
      button.querySelector("img").alt = photo.alt;
      button.querySelector("span").textContent = photo.caption;
      galleryGrid.append(button);
    });
  }

  const hoursList = document.querySelector("#hours-list");
  if (hoursList) {
    business.hours.forEach((hours) => {
      const row = document.createElement("p");
      row.className = "hours-line";
      row.innerHTML = "<span></span><span></span>";
      row.children[0].textContent = hours.days;
      row.children[1].textContent = hours.time;
      hoursList.append(row);
    });
  }

  const mapLink = document.querySelector("[data-map-link]");
  if (mapLink) mapLink.href = business.mapUrl;
  const mapEmbed = document.querySelector("[data-map-embed]");
  if (mapEmbed) mapEmbed.src = business.mapEmbedUrl;
}

// Keep the mobile menu and gallery viewer usable with mouse, touch and keyboard.
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    }
  });
}

const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("p");
  const closeButton = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll("[data-lightbox-src]").forEach((photoButton) => {
    photoButton.addEventListener("click", () => {
      lightboxImage.src = photoButton.dataset.lightboxSrc;
      lightboxImage.alt = photoButton.dataset.lightboxAlt;
      lightboxCaption.textContent = photoButton.querySelector("span").textContent;
      lightbox.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm && siteData) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const feedback = document.querySelector("#form-feedback");

    if (!name || name.length > 100 || !message || message.length > 5000) {
      feedback.textContent = "Please check your name and message, then try again.";
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    feedback.textContent = "Your email app should open with the message ready to review and send.";
    window.location.href = `mailto:${siteData.business.email}?subject=${subject}&body=${body}`;
  });
}