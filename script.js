//start på slideshow
let timer; // set timeout variablen
let slideIndex = 1; //slideshow nummer

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    addEventListenersToSlideShow();
    showSlides(slideIndex); //starter slideshowet ved at kalde showslides for slideindex=1

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function addEventListenersToSlideShow() {
    document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
    document.querySelector(".next").addEventListener("click", () => plusSlides(1));

    document.querySelectorAll(".dot")[0].addEventListener("click", () => currentSlide(1));
    document.querySelectorAll(".dot")[1].addEventListener("click", () => currentSlide(2));
    document.querySelectorAll(".dot")[2].addEventListener("click", () => currentSlide(3));
    document.querySelectorAll(".dot")[3].addEventListener("click", () => currentSlide(4));
}

// denne funkction bliver kaldt af left og right slide funktionalitten. Enten øges slideIndex med 1 eller oggås reduceres den med 1
function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

// denne funtkion bliver kaldt, når man klikker på et dot og slideshiwet skifter derefter til det ønskede slide. Timeout variablen bliver clearet inden.
function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

// showSlidesWrapper kalder showSlides hvor slideIndex øges med 1
function showSlidesWrapper() {
    showSlides(slideIndex += 1);
}

//functionen show sllides håndterer forskellige skift i slidehsowt. input variablen n fortæller noget om hvilket slide, der skal vises.
function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides"); //selcetor alle slides(imgs)
    let dots = document.querySelectorAll(".dot"); //selsctor alle dots

    // hvis n er større end slides.length bliver slideIndex sat til 1
    if (n > slides.length) {
        slideIndex = 1
    }

    // hvis n er mindre end 1 sættes slideIndex til slide.length (hvilket er 4)
    if (n < 1) {
        slideIndex = slides.length
    }

    // skjuler alle slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // denne fjerne alle active classes fra dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // tilføjer dispaly block til det nye slide, så det vises
    slides[slideIndex - 1].style.display = "block";
    //tilføjer active til det aktuelle dot så dette skifter farve
    dots[slideIndex - 1].className += " active";

    //tilføjer en setTimeout funtikn så showslide wrapper bliver kaldt efter 3.3 sek.
    // denne funktion gør at slideshowt roterer
    // hvis den ikke bliver clearet i function currentSlide bliver den crazy
    timer = setTimeout(
        showSlidesWrapper, 3300); // Change image every 3.3 seconds
}


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    fastHeader()
};

// Get the header
var header = document.getElementById("side_menu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fastHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//var coll = document.getElementsByClassName("collapsible");
//var i;
//
//for (i = 0; i < coll.length; i++) {
//    coll[i].addEventListener("click", function () {
//        this.classList.toggle("active");
//        var content = this.nextElementSibling;
//        if (content.style.display === "block") {
//            content.style.display = "none";
//        } else {
//            content.style.display = "block";
//        }
//    });
//}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Læs mere";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Vis mindre";
        moreText.style.display = "inline";
    }
}
