let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Image Slider

var img = document.querySelector('.slide');

var slides = ['chat_img.png', 'donate.jpg', 'map_img.jpg'];
var start = 0;

function slider() {
    if (start < slides.length) {
        start = start + 1;
    } else {
        start = 1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[start - 1] + ">";
}
setInterval(slider, 2000);