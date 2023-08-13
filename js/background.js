const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${randomImg}`;
bgImg.classList.add('bg');

document.body.appendChild(bgImg);


// 새로 배운 것.
// createElement() : 요소 추가하는 것.
// document.body.appendChild() : body에 html 코드 추가하기.

