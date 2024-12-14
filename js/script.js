/* ===========================================================
slider
=========================================================== */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

slides[slideIndex].classList.add("active");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");

  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);

/* ===========================================================
marquee top
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // marquee内のspan要素に適用
  const marquee = document.getElementById("marquee");
  const marqueeText = marquee.querySelector("span").innerText;

  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.innerText = marqueeText;
    marquee.appendChild(span);
  }

  // h3.marquee要素に適用
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
});

/* ===========================================================
marquee bottom
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 下部のmarquee内のspan要素に適用
  const marqueeBottom = document.getElementById("marquee-bottom");
  const marqueeBottomText = marqueeBottom.querySelector("span").innerText;

  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.innerText = marqueeBottomText;
    marqueeBottom.appendChild(span);
  }
});

/* ===========================================================
牛とハンマーの画像を複製して動かす
=========================================================== */
const cowElement = document.querySelector(".cow");
const hammerElement = document.querySelector(".hammer");
const cowContainer = document.querySelector(".cow-container");
const hammerContainer = document.querySelector(".hammer-container");
const numberOfCopies = 5; // 複製する数

// 牛の画像を複製して追加
for (let i = 0; i < numberOfCopies - 1; i++) {
  const newCow = cowElement.cloneNode(true);
  cowContainer.appendChild(newCow);
}

// ハンマーの画像を複製して追加
for (let i = 0; i < numberOfCopies - 1; i++) {
  const newHammer = hammerElement.cloneNode(true);
  hammerContainer.appendChild(newHammer);
}

// すべての牛とハンマーの画像を取得
const images = document.querySelectorAll(".cow, .hammer");

// 画像のランダムな動きを設定
images.forEach((img) => {
  let posX = 0;
  let posY = 0;
  let speedX = (Math.random() - 0.5) * 0.5; // 速度を遅くする
  let speedY = (Math.random() - 0.5) * 0.5; // 速度を遅くする

  function moveImage() {
    posX += speedX;
    posY += speedY;

    // 画面端で反射するようにする
    if (posX <= -20 || posX >= 20) {
      speedX *= -1;
    }
    if (posY <= -20 || posY >= 20) {
      speedY *= -1;
    }

    // 移動と回転の適用（回転もゆっくり）
    img.style.transform = `translate(${posX}px, ${posY}px) rotate(${
      Math.sin(posX / 20) * 5
    }deg)`;

    // 次のフレームで再度呼び出し
    requestAnimationFrame(moveImage);
  }

  moveImage();
});

const carousel = document.querySelector(".carousel");
const firstItem = carousel.children[0].cloneNode(true);
carousel.appendChild(firstItem);

/* ===========================================================
チカチカ文字
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("h2");
  const lines = h2.innerHTML.split("<br>"); // <br>で行ごとに分割
  h2.innerHTML = ""; // 元の内容をクリア

  lines.forEach((line, lineIndex) => {
    line.split("").forEach((char) => {
      if (char === " ") {
        h2.appendChild(document.createTextNode(" "));
      } else {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        charSpan.style.animationDelay = `${Math.random() * 1}s`; // ランダムな遅延を設定
        h2.appendChild(charSpan);
      }
    });
    if (lineIndex < lines.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
});
