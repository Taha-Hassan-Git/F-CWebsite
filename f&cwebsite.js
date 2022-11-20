let sky = document.getElementById("sky");
let building = document.getElementById("building");
let text = document.getElementById('h1text');
const hidden = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
});

hidden.forEach((el) => observer.observe(el));

window.addEventListener('scroll', function(){
    var yValue = this.window.scrollY;
    sky.style.top = yValue + 0.1 + "px";
    text.style.left = yValue + 1 + "px";
    text.style.top = yValue + 0.1 + "px";
})


function showHide(button) {
    let toHideShow = document.getElementsByClassName(button.name);
    let showHide = button;
    if (showHide.innerHTML === "Show"){
        showHide.innerHTML = "Hide";
        toHideShow[0].classList.toggle('show');
    } else {
        showHide.innerHTML = "Show";
        toHideShow[0].classList.toggle('show');
    }
}

