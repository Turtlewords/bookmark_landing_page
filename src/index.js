// Elements

const hamburger = document.querySelector(".header__hamburger");
const closeSlideMenuBtn = document.querySelector(".slide-menu-hero__close-btn");
const slideMenu = document.querySelector(".slide-menu-container");

const open = document.querySelectorAll(".tab__open");
const close = document.querySelectorAll(".tab__close");
const submitBtn = document.querySelector(".contact-form__submit-btn");

const features = document.querySelectorAll(".features");
const featureBtns = document.querySelectorAll(".feature-btn")

const feature1 = document.querySelector(".features-1");
const feature2 = document.querySelector(".features-2");
const feature3 = document.querySelector(".features-3");

const featuresBtn1 = document.querySelector(".feautures-list__btn-1");
const featuresBtn2 = document.querySelector(".feautures-list__btn-2");
const featuresBtn3 = document.querySelector(".feautures-list__btn-3");

// Event Listeners

hamburger.addEventListener("click", () => {
    slideMenu.classList.add("animate-(--animate-fade-in)");
    
})

closeSlideMenuBtn.addEventListener("click", () => {
    slideMenu.classList.add("animate-(--animate-fade-out)");
})

featuresBtn1.addEventListener("click", () => {
    clearFeatureSections()
    clearFeatureBtns()
    feature1.classList.remove("hidden");
    feature1.classList.add("animate-(--animate-fade-in)");
    featuresBtn1.classList.remove("border-transparent");
    
    featuresBtn1.classList.add("border-b-red-400");
})

featuresBtn2.addEventListener("click", () => {
    clearFeatureSections()
    clearFeatureBtns()
    feature2.classList.remove("hidden");
    feature2.classList.add("animate-(--animate-fade-in)");
    featuresBtn2.classList.remove("border-transparent");
    
    featuresBtn2.classList.add("border-b-red-400");
})

featuresBtn3.addEventListener("click", () => {
    clearFeatureSections()
    clearFeatureBtns()
    feature3.classList.remove("hidden");
    feature3.classList.add("animate-(--animate-fade-in)");
    featuresBtn3.classList.remove("border-transparent");
    
    featuresBtn3.classList.add("border-b-red-400");
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", function() {

        let panel = open[i].parentElement.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        open[i].classList.add("hidden");
        close[i].classList.add("block");
        close[i].classList.remove("hidden");
    })
}

for (let i = 0; i < open.length; i++) {
    close[i].addEventListener("click", function() {

        let panel = open[i].parentElement.nextElementSibling;
        panel.style.maxHeight = null;
        close[i].classList.add("hidden");
        open[i].classList.add("block");
        open[i].classList.remove("hidden");
    })
}

// functions

function clearFeatureSections() {
    features.forEach((feature) => {
        feature.classList.add("opacity-0");
        feature.classList.add("hidden");
    })
}

function clearFeatureBtns() {
    featureBtns.forEach((btn) => {
        btn.classList.remove("border-b-red-400");
        btn.classList.add("border-transparent");
    })
}