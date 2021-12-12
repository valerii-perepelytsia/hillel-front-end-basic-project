const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");
const btn = document.querySelector(".publications__button_service-page");
const closebtn = document.querySelector(".modal__close-button");

btn.addEventListener("click", () => {
    modal.classList.toggle("show")
    mask.classList.toggle("show")
})

closebtn.addEventListener("click", () => {
    modal.classList.toggle("show")
    mask.classList.toggle("show")
})
