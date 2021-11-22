const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".basic-grid div");
const original = document.querySelector(".full-img");
var origimg

previews.forEach(previews =>{
    previews.addEventListener('click', () => {
        var origimg = previews.getAttribute("orig");
        modal.getElementsByTagName("img")[0].setAttribute("src", origimg);
        modal.classList.add("open");
    })
})

modal.addEventListener("click", (e) =>{
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
    }
})