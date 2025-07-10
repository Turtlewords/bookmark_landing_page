const open = document.querySelectorAll(".tab__open");
const close = document.querySelectorAll(".tab__close");

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