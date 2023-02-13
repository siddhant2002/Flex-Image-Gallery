const audio = new Audio('s1.mp3');
    audio.play();
    const audio1 = new Audio('s2.mp3');
    audio1.play();


const panels = document.querySelectorAll('.panel');
function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));