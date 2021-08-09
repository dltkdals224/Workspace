const images = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("background");
bgImage.src = `img/${chosenImage}`;

//body에 추가
document.body.appendChild(bgImage);