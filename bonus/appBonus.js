// Récupération des id (image)
let img = document.getElementById("img");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

// Récupération des btn
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

window.onload = defaut();

function defaut() {
    img2.classList.toggle("active");
    img2.querySelector(".imgColor").classList.toggle("active");
}

// Function qui ajoute les classes actives.
function myfunction(el) {
  // Si l'élément id est strictement égal à test
  if (el.getAttribute("id") === "img" || el.getAttribute("id") === "btn") {
    img.classList.toggle("active");
    img.querySelector(".imgColor").classList.toggle("active");
    // Suppression
    img1.classList.remove("active");
    img1.querySelector(".imgColor").classList.remove("active");
    img2.classList.remove("active");
    img2.querySelector(".imgColor").classList.remove("active");
    img3.classList.remove("active");
    img3.querySelector(".imgColor").classList.remove("active");
    img4.classList.remove("active");
    img4.querySelector(".imgColor").classList.remove("active");
  } else if (
    el.getAttribute("id") === "img1" ||
    el.getAttribute("id") === "btn1"
  ) {
    img1.classList.toggle("active");
    img1.querySelector(".imgColor").classList.toggle("active");

    // Suppression
    img.classList.remove("active");
    img.querySelector(".imgColor").classList.remove("active");
    img2.classList.remove("active");
    img2.querySelector(".imgColor").classList.remove("active");
    img3.classList.remove("active");
    img3.querySelector(".imgColor").classList.remove("active");
    img4.classList.remove("active");
    img4.querySelector(".imgColor").classList.remove("active");
  } else if (
    el.getAttribute("id") === "img2" ||
    el.getAttribute("id") === "btn2"
  ) {
    img2.classList.toggle("active");
    img2.querySelector(".imgColor").classList.toggle("active");

    // Suppression
    img.classList.remove("active");
    img.querySelector(".imgColor").classList.remove("active");
    img1.classList.remove("active");
    img1.querySelector(".imgColor").classList.remove("active");
    img3.classList.remove("active");
    img3.querySelector(".imgColor").classList.remove("active");
    img4.classList.remove("active");
    img4.querySelector(".imgColor").classList.remove("active");
  } else if (
    el.getAttribute("id") === "img3" ||
    el.getAttribute("id") === "btn3"
  ) {
    img3.classList.toggle("active");
    img3.querySelector(".imgColor").classList.toggle("active");

    // Suppression
    img.classList.remove("active");
    img.querySelector(".imgColor").classList.remove("active");
    img1.classList.remove("active");
    img1.querySelector(".imgColor").classList.remove("active");
    img2.classList.remove("active");
    img2.querySelector(".imgColor").classList.remove("active");
    img4.classList.remove("active");
    img4.querySelector(".imgColor").classList.remove("active");
  } else if (
    el.getAttribute("id") === "img4" ||
    el.getAttribute("id") === "btn4"
  ) {
    img4.classList.toggle("active");
    img4.querySelector(".imgColor").classList.toggle("active");

    // Suppression
    img.classList.remove("active");
    img.querySelector(".imgColor").classList.remove("active");
    img1.classList.remove("active");
    img1.querySelector(".imgColor").classList.remove("active");
    img2.classList.remove("active");
    img2.querySelector(".imgColor").classList.remove("active");
    img3.classList.remove("active");
    img3.querySelector(".imgColor").classList.remove("active");
  }
}

img.addEventListener("click", () => {
  // console.log(img);
  // console.log(img.getAttribute("id"));
  // L'élément en paramètre
  myfunction(img);
});

btn.addEventListener("click", () => {
  myfunction(img);
});

img1.addEventListener("click", () => {
  myfunction(img1);
});

btn1.addEventListener("click", () => {
  myfunction(img1);
});

img2.addEventListener("click", () => {
  myfunction(img2);
});

btn2.addEventListener("click", () => {
  myfunction(img2);
});

img3.addEventListener("click", () => {
  myfunction(img3);
});

btn3.addEventListener("click", () => {
  myfunction(img3);
});

img4.addEventListener("click", () => {
  myfunction(img4);
});

btn4.addEventListener("click", () => {
  myfunction(img4);
});