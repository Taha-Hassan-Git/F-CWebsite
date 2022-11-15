
function showHide() {
    
    let showHide = document.getElementsByClassName("showhide");
    console.log(showHide);
    let toHideShow = document.getElementsByClassName(showHide.name)
    if (showHide.innerHTML === "Show"){
        showHide.innerHTML = "Hide";
        toHideShow.display = "block";
    } else {
        showHide.innerHTML = "Show"
        toHideShow.innerHTML = "none"
    }
}