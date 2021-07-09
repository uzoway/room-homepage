// Mobile navigation toggle

var openButton = document.getElementById("openBtn");
var closeButton = document.getElementById("closeBtn");
var mobileMenu = document.getElementById("mobileNav");

openButton.onclick = function(){
    if(mobileMenu.style.top = "-10rem"){
        mobileMenu.style.top = 0;
    }
}

closeButton.onclick = function(){
    if(mobileMenu.style.top = "0"){
        mobileMenu.style.top = '-10rem';
    }
}


// Image slider and text content switch

var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var gallery = document.getElementById("gallery");
var header = document.getElementById("heading");
var paraGraph = document.getElementById("paragraph");

var head = new Array(
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
);

var paragraph = new Array(
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
)

var bgImage = new Array(
    "url('images/desktop-image-hero-1.jpg')",
    "url('images/desktop-image-hero-2.jpg')",
    "url('images/desktop-image-hero-3.jpg')"
)

var bgImageMobile = new Array(
    "url('images/mobile-image-hero-1.jpg')",
    "url('images/mobile-image-hero-2.jpg')",
    "url('images/mobile-image-hero-3.jpg')"
)

let i = 0;

rightBtn.onclick = function(){
    if(i<2 && document.documentElement.clientWidth < 991){
        gallery.style.backgroundImage = bgImageMobile[i+1];
        header.innerHTML = head[i+1];
        paraGraph.innerHTML = paragraph[i+1];
        i++;
    }
    else if(i<2){
        gallery.style.backgroundImage = bgImage[i+1];
        header.innerHTML = head[i+1];
        paraGraph.innerHTML = paragraph[i+1];
        i++;
    }
}

leftBtn.onclick = function(){
    if(i>0 && document.documentElement.clientWidth < 991){
        gallery.style.backgroundImage = bgImageMobile[i-1];
        header.innerHTML = head[i-1];
        paraGraph.innerHTML = paragraph[i-1];
        i--;
    }
    else if(i>0){
        gallery.style.backgroundImage = bgImage[i-1];
        header.innerHTML = head[i-1];
        paraGraph.innerHTML = paragraph[i-1];
        i--;
    }
}

// Preloader for website

const loader = document.querySelector(".loader");
const hero = document.querySelector(".hero");
const about = document.querySelector(".about");

function preloader(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = "none";

        setTimeout(() => {
            hero.style.opacity = 1;
            about.style.opacity = 1;
        }, 50);
    }, 3500);
}

preloader();
