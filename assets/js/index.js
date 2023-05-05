
// MENU

const hide = document.querySelector(".menu_closed");
const show = document.querySelector(".menu");
const menu = document.querySelector(".submenu");

console.log("show : ", show);
console.log("hide : ", hide);
console.log("menu : ", menu);
show.addEventListener("click", () => {
    menu.style.display = "flex";

})
hide.addEventListener("click", () => {
    menu.style.display = "none";
})

