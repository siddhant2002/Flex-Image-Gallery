const sample = document.getElementById("foobar");
sample.play();
const sample1 = document.getElementById("foobar1");
sample1.play();

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