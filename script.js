
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
let main = document.getElementById("main");


let etat = true;
function accordeonJohn() {
 etat = !etat;
     if  (etat) {
        img.querySelector(".imgBlack").style.left = "250px";
        img.querySelector(".imgColor").style.bottom = "500px";
        img.querySelector(".imgColor").style.width = "140px";

        img.querySelector(".card").style.right = "560px";
     } else {
        img.querySelector(".imgBlack").style.removeProperty("left");
        img.querySelector(".imgColor").style.removeProperty("bottom");
        img.querySelector(".imgColor").style.removeProperty("width");

        img.querySelector(".card").style.removeProperty("right");
     }
}


function accordeonVin() {
    etat = !etat;
    if (etat) {
        img1.querySelector(".imgBlack").style.left = "250px";
        img1.querySelector(".imgColor").style.bottom = "500px";
        img1.querySelector(".imgColor").style.width = "280px";
        img1.querySelector(".imgColor").style.zIndex = "5";

        img1.querySelector(".card").style.right = "418px";
    } else {
        img1.querySelector(".imgBlack").style.removeProperty("left");
        img1.querySelector(".imgColor").style.removeProperty("bottom");
        img1.querySelector(".imgColor").style.removeProperty("width");
        img1.querySelector(".imgColor").style.removeProperty("z-index");

        img1.querySelector(".card").style.removeProperty("right");
    }
}





