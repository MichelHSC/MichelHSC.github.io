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

  console.log(now, hours, minutes, seconds);
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
