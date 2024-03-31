let btt = document.getElementById("bar");
let cls = document.getElementById("close");
let nvbr = document.getElementById("navbar");

let btt1 = document.getElementById("user");
let cls1 = document.getElementById("asd");
let nvbr1 = document.getElementById("userbar");

let btt2 = document.getElementById("user2");


if (btt) {
  btt.addEventListener("click", () => {
    nvbr.classList.add("active");
  });
}

if (cls) {
  cls.addEventListener("click", () => {
    nvbr.classList.remove("active");
  });
}

if (btt1) {
  btt1.addEventListener("click", () => {
    nvbr1.classList.add("active");
  });
}

if (cls1) {
  cls1.addEventListener("click", () => {
    nvbr1.classList.remove("active");
  });
}

if (btt2) {
  btt2.addEventListener("click", () => {
    nvbr1.classList.add("active");
  });
}