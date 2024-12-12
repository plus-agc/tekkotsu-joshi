let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

// 初期スライドを表示
slides[slideIndex].classList.add("active");

function showNextSlide() {
  // 現在のスライドを非表示にする
  slides[slideIndex].classList.remove("active");

  // 次のスライドのインデックスを計算
  slideIndex = (slideIndex + 1) % slides.length;

  // 次のスライドを表示
  slides[slideIndex].classList.add("active");
}

// 3秒ごとにスライドを切り替える
setInterval(showNextSlide, 3000);
