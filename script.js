document.addEventListener("DOMContentLoaded", () => {
  const gift = document.getElementById("gift");
  const bgMusic = document.getElementById("bg-music");
  const openSound = document.getElementById("open-sound");
  const clickText = document.querySelector(".click-text");
  const congratsWrapper = document.querySelector(".congrats-wrapper");

  gift.addEventListener("click", () => {
    // Воспроизводим звук открытия сразу
    openSound.play();

    // Добавляем тряску
    gift.classList.add("shaking");

    // Через 800 мс убираем подарок и показываем поздравление + включаем музыку
    setTimeout(() => {
      gift.classList.remove("shaking");
      gift.classList.add("opened");

      if (clickText) clickText.remove();
      congratsWrapper.classList.remove("hidden");
      congratsWrapper.classList.add("slide-down"); // ✅ добавили анимацию сверху вниз

      // Фоновая музыка запускается только сейчас
      bgMusic.play();
    }, 800);
  });
});


