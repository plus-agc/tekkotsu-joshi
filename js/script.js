/* ===========================================================
slider
=========================================================== */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  slides[slideIndex].classList.add("active");

  function showNextSlide() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
}

/* ===========================================================
marquee and animations
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Marquee top
  const marquee = document.getElementById("marquee");
  if (marquee) {
    const marqueeText = marquee.querySelector("span")?.innerText || "";
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.innerText = marqueeText;
      marquee.appendChild(span);
    }
  }

  // Marquee bottom
  const marqueeBottom = document.getElementById("marquee-bottom");
  if (marqueeBottom) {
    const marqueeBottomText =
      marqueeBottom.querySelector("span")?.innerText || "";
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.innerText = marqueeBottomText;
      marqueeBottom.appendChild(span);
    }
  }

  // H3 Marquee
  const h3MarqueeElements = document.querySelectorAll("h3.marquee");
  h3MarqueeElements.forEach((h3) => {
    const h3Text = h3.innerText;
    for (let i = 0; i < 20; i++) {
      const newH3 = document.createElement("h3");
      newH3.className = "marquee";
      newH3.innerText = h3Text;
      h3.parentElement.appendChild(newH3);
    }
  });

  // Cow & Hammer animation
  const animateElements = (selector, containerSelector, copies = 5) => {
    const element = document.querySelector(selector);
    const container = document.querySelector(containerSelector);

    if (element && container) {
      // Create copies
      for (let i = 0; i < copies - 1; i++) {
        const newElement = element.cloneNode(true);
        container.appendChild(newElement);
      }
    }
  };

  animateElements(".cow", ".cow-container");
  animateElements(".hammer", ".hammer-container");

  // Animation for all images
  const images = document.querySelectorAll(".cow, .hammer");
  const animationConfig = {
    maxOffset: 20,
    baseSpeed: 0.5,
    rotationFactor: 5,
  };

  images.forEach((img) => {
    if (!img) return;

    let posX = 0;
    let posY = 0;
    let speedX = (Math.random() - 0.5) * animationConfig.baseSpeed;
    let speedY = (Math.random() - 0.5) * animationConfig.baseSpeed;

    function moveImage() {
      posX += speedX;
      posY += speedY;

      if (Math.abs(posX) >= animationConfig.maxOffset) {
        speedX *= -1;
        posX = Math.sign(posX) * animationConfig.maxOffset;
      }
      if (Math.abs(posY) >= animationConfig.maxOffset) {
        speedY *= -1;
        posY = Math.sign(posY) * animationConfig.maxOffset;
      }

      const rotation =
        Math.sin(posX / animationConfig.maxOffset) *
        animationConfig.rotationFactor;
      img.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;

      requestAnimationFrame(moveImage);
    }

    moveImage();
  });

  // Carousel
  const carousel = document.querySelector(".carousel");
  if (carousel && carousel.children.length > 0) {
    const firstItem = carousel.children[0].cloneNode(true);
    carousel.appendChild(firstItem);
  }
});
