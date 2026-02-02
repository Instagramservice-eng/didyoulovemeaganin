document.addEventListener("DOMContentLoaded", () => {

  // Buttons
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn  = document.querySelector(".js-no-btn");

  // Result container & YouTube iframe
  const result  = document.querySelector(".result-container");
  const ytVideo = document.getElementById("ytVideo");

  // YES button click ❤️
  yesBtn.addEventListener("click", () => {

    // show result section
    result.classList.add("show");

    // load & autoplay YouTube Shorts (loop)
    ytVideo.src =
      "https://www.youtube.com/embed/PRGs-SgRDQc?autoplay=1&mute=1&loop=1&playlist=PRGs-SgRDQc";

    // hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display  = "none";
  });

  // NO button escape 😅
  noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth  - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top  = `${y}px`;
  });

});
