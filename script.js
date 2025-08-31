const imgs = document.querySelectorAll('.header-slider ul  img');
const prev_btn = document.querySelector('.control_prev img');
const next_btn = document.querySelector('.control_next img');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // Hide all images
    }
    imgs[n].style.display = 'block'; // Show the current image
}
changeSlide();


prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener("click", (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

