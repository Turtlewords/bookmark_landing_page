// Elements

const open = document.querySelectorAll(".tab__open");
const close = document.querySelectorAll(".tab__close");
const submitBtn = document.querySelector(".contact-form__submit-btn");

const feature1 = document.querySelector(".features-1");
const feature2 = document.querySelector(".features-2");
const feature3 = document.querySelector(".features-3");

const featuresBtn1 = document.querySelector(".feautures-list__btn-1");
const featuresBtn2 = document.querySelector(".feautures-list__btn-2");
const featuresBtn3 = document.querySelector(".feautures-list__btn-3");

// Event Listeners

featuresBtn1.addEventListener("click", () => {
    feature1.classList.add("flex");
})

featuresBtn2.addEventListener("click", () => {

})

featuresBtn3.addEventListener("click", () => {

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