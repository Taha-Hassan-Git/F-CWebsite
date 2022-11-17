
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