// RELÓGIO DIGITAL
function updateClock() {
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000);

// LIGHTBOX
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageUrl = item
      .querySelector(".gallery-image")
      .getAttribute("data-src");

    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// ONLOAD CARREGAR EVENTOS DEPOIS

// FOCO NA FOTO
const imgFocus = document.querySelector("#bio-img");

function focuFoto() {
  const div = document.querySelector("#bio-img");
  div.style.borderColor = "#F16006";
}
function noFocuFoto() {
  const div = document.querySelector("#bio-img");
  div.style.borderColor = "#11FF00";
}

imgFocus.addEventListener("mouseenter", focuFoto);
imgFocus.addEventListener("mouseleave", noFocuFoto);


// FOCO COLORIDO
const ionColor = document.querySelector("#icon-email");
const emailColor = document.querySelector("#email-link");

function focoEmail() {
  const liEmail = document.querySelector("#email-link");
  const div = document.querySelector("#icon-email");
  liEmail.style.color = "#F16006";
  div.style.color = "#F16006";
}
function noFocoEmail() {
  const liEmail = document.querySelector("#email-link");
  const div = document.querySelector("#icon-email");
  liEmail.style.color = "#FFF";
  div.style.color = "#11FF00";
}

ionColor.addEventListener("mouseenter", focoEmail)
ionColor.addEventListener("mouseleave", noFocoEmail);
emailColor.addEventListener("mouseenter", focoEmail);
emailColor.addEventListener("mouseleave", noFocoEmail);


// 