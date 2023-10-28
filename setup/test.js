const imgs = [
  {
    id: 1,
    img: "./img/carousel inspiration.png",
  },
  {
    id: 2,
    img: "./img/calm design.png",
  },
  {
    id: 3,
    img: "./img/images inspiration.png",
  },
  {
    id: 4,
    img: "./img/minimalism and sim[le.png",
  },
  {
    id: 5,
    img: "./img/modal windows.png",
  },
];

const btnLeft = document.querySelector(".left-arr");
const btnRight = document.querySelector(".right-arr");
const img = document.querySelector(".img");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const imgSlide = imgs[currentItem];
  img.src = imgSlide.img;
});

function showImg(check) {
  const imgSlide = imgs[check];
  img.src = imgSlide.img;
}

btnRight.addEventListener("click", () => {
  currentItem++;
  if (currentItem > imgs.length - 1) {
    currentItem = 0;
  }
  showImg(currentItem);
});

btnLeft.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = imgs.length - 1;
  }
  showImg(currentItem);
});
