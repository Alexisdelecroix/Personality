// let john = document.getElementById("johnBlack");
// let cardJohn = document.getElementById("cardJohn")
// john.addEventListener("click", function() {
//     console.log("coucou");
//     cardJohn.classList.toggle("active")
//     john.setAttribute("src", "./images/johnsonblack.png");
// })
// let btnJohn = document.getElementById("btnJohn");
// let imgBlack = document.getElementById("imgBlack");
// let imgColor = document.getElementById("imgColor");
// let card = document.getElementById("card");
// function accordeon() {
//     imgBlack.classList.toggle("activeJohn");
//     imgColor.classList.toggle("activeJohn")
//     card.classList.toggle("activeJohn");
// }

let img = document.getElementById("img");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let main = document.getElementById("main");


let johnActive = false;
let vinActive = false;
let imenActive = false;
let jessicaActive = false;
let zitaActive = false;

onload = () => { accordeonImen()};

function desactivation() {

}

let imgClick = document.getElementById("testClick");
imgClick.addEventListener("click" , accordeonJohn);

function accordeonJohn() {
    johnActive = !johnActive;
    if (johnActive) {
        img.querySelector(".imgBlack").style.left = "275px";
        img.querySelector(".imgColor").style.bottom = "500px";
        img.querySelector(".imgColor").style.width = "140px";
        img.querySelector(".imgColor").style.zIndex = "5";
        img.querySelector(".imgBlack").style.zIndex = "5";
        img.querySelector(".card").style.zIndex = "5";
        img.querySelector(".card").style.right = "560px";
        img.querySelector(".card").style.opacity = "1";
    } else {
        img.querySelector(".imgBlack").style.removeProperty("left");
        img.querySelector(".imgColor").style.removeProperty("bottom");
        img.querySelector(".imgColor").style.removeProperty("width");
        img.querySelector(".card").style.removeProperty("right");
        img.querySelector(".imgColor").style.removeProperty("z-index");
        img.querySelector(".imgBlack").style.removeProperty("z-index");
        img.querySelector(".card").style.removeProperty("z-index")
        img.querySelector(".card").style.removeProperty("opacity")
    }
}


function accordeonVin() {
    vinActive = !vinActive;
    if (vinActive) {
        img1.querySelector(".imgBlack").style.left = "275px";
        img1.querySelector(".imgColor").style.bottom = "500px";
        img1.querySelector(".imgColor").style.width = "140px";
        img1.querySelector(".imgColor").style.backgroundPosition = "-140px";
        img1.querySelector(".imgColor").style.left = "140px";
        img1.querySelector(".imgColor").style.zIndex = "5";
        img1.querySelector(".imgBlack").style.zIndex = "5";
        img1.querySelector(".card").style.zIndex = "5";
        img1.querySelector(".card").style.opacity = "1";
        img1.querySelector(".card").style.right = "418px";
    } else {
        img1.querySelector(".imgBlack").style.removeProperty("left");
        img1.querySelector(".imgColor").style.removeProperty("bottom");
        img1.querySelector(".imgColor").style.removeProperty("width");
        img1.querySelector(".imgColor").style.removeProperty("z-index");
        img1.querySelector(".imgBlack").style.removeProperty("z-index");
        img1.querySelector(".card").style.removeProperty("z-index")
        img1.querySelector(".card").style.removeProperty("right");
        img1.querySelector(".card").style.removeProperty("opacity")
    }
}


function accordeonImen() {
    imenActive = !imenActive;
    if (imenActive) {
        img2.querySelector(".imgBlack").style.left = "280px";
        img2.querySelector(".imgColor").style.bottom = "500px";
        img2.querySelector(".imgColor").style.width = "140px";
        img2.querySelector(".imgColor").style.backgroundPosition = "-280px";
        img2.querySelector(".imgColor").style.left = "280px";
        img2.querySelector(".imgColor").style.zIndex = "5";
        img2.querySelector(".imgBlack").style.zIndex = "5";
        img2.querySelector(".card").style.zIndex = "5";
        img2.querySelector(".card").style.opacity = "1";
        img2.querySelector(".card").style.right = "280px";
    } else {
        img2.querySelector(".imgBlack").style.removeProperty("left");
        img2.querySelector(".imgColor").style.removeProperty("bottom");
        img2.querySelector(".imgColor").style.removeProperty("width");
        img2.querySelector(".imgColor").style.removeProperty("z-index");
        img2.querySelector(".imgBlack").style.removeProperty("z-index");
        img2.querySelector(".card").style.removeProperty("z-index")
        img2.querySelector(".card").style.removeProperty("right");
        img2.querySelector(".card").style.removeProperty("opacity")
    }
}

function accordeonJessica() {
    jessicaActive = !jessicaActive;
    if (jessicaActive) {
        img3.querySelector(".imgBlack").style.left = "560px";
        img3.querySelector(".imgBlack").style.backgroundPosition = "420px";
        img3.querySelector(".imgColor").style.bottom = "500px";
        img3.querySelector(".imgColor").style.width = "140px";
        img3.querySelector(".imgColor").style.backgroundPosition = "-420px";
        img3.querySelector(".imgColor").style.left = "420px";
        img3.querySelector(".imgColor").style.zIndex = "5";
        img3.querySelector(".imgBlack").style.zIndex = "5";
        img3.querySelector(".card").style.zIndex = "5";
        img3.querySelector(".card").style.opacity = "1";
        img3.querySelector(".card").style.right = "140px";
    } else {
        img3.querySelector(".imgBlack").style.removeProperty("left");
        img3.querySelector(".imgColor").style.removeProperty("bottom");
        img3.querySelector(".imgColor").style.removeProperty("width");
        img3.querySelector(".imgColor").style.removeProperty("z-index");
        img3.querySelector(".imgBlack").style.removeProperty("z-index");
        img3.querySelector(".card").style.removeProperty("z-index")
        img3.querySelector(".card").style.removeProperty("right");
        img3.querySelector(".card").style.removeProperty("opacity")
    }
}

function accordeonZita() {
    zitaActive = !zitaActive;
    if (zitaActive) {
        img2.querySelector(".imgColor").style.bottom = "500px";
        img2.querySelector(".imgColor").style.width = "140px";
        img2.querySelector(".imgColor").style.backgroundPosition = "-560px";
        img2.querySelector(".imgColor").style.left = "560px";
        img2.querySelector(".imgColor").style.zIndex = "5";
        img2.querySelector(".imgBlack").style.zIndex = "5";
        img2.querySelector(".card").style.zIndex = "5";
        img2.querySelector(".card").style.opacity = "1";
        img2.querySelector(".card").style.right = "0px";
    } else {
        img2.querySelector(".imgBlack").style.removeProperty("left");
        img2.querySelector(".imgColor").style.removeProperty("bottom");
        img2.querySelector(".imgColor").style.removeProperty("width");
        img2.querySelector(".imgColor").style.removeProperty("z-index");
        img2.querySelector(".imgBlack").style.removeProperty("z-index");
        img2.querySelector(".card").style.removeProperty("z-index")
        img2.querySelector(".card").style.removeProperty("right");
        img2.querySelector(".card").style.removeProperty("opacity")
    }
}


