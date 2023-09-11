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

const indicator = document.getElementById('indicator')

const maxHeigth = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () =>{
    const porcentage = (window.scrollY / maxHeigth) * 100;

    indicator.style.width = `${porcentage}%`;
});
