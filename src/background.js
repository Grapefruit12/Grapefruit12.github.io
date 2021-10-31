/*랜덤 배경 이미지*/
const images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
console.log(bgImage);//확인차

document.body.appendChild(bgImage);

