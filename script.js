const heart = document.getElementById('heart')

function changeColor(heart) {
    if (heart.classList.contains("purple")) {
        heart.src = "img/red.png";
        heart.classList.remove("purple");
    } else {
        heart.src = "img/purple.png";
        heart.classList.add("purple");
    }
}