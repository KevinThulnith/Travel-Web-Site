let mainimage = document.getElementById("main-img");
let smallimgs = document.querySelectorAll(".small-image");

for (const smallimg of smallimgs) {
  smallimg.addEventListener("click", () => {
    mainimage.src = smallimg.src;
  });
}

let scrbtt = document.querySelector("#lastbtt");
let scrpane = document.querySelector(".image-group");
let rght = document.querySelector("#arrow-right");
let lft = document.querySelector("#arrow-left");
console.log(rght, lft);

let num = 0;
scrbtt.addEventListener("click", () => {
  rght.classList.toggle("hidep");
  lft.classList.toggle("hidep");
  if (!num) {
    scrpane.scrollLeft = 999;
    num = 1;
  } else {
    scrpane.scrollLeft = 0;
    num = 0;
  }
});
