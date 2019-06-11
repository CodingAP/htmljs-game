let key = '', keyState = false;
let mouseX = 0, mouseY = 0;
let mouseButton = 0, mouseState = false;

document.addEventListener('keydown', event => {
    key = event.key;
    keyState = true;
});

document.addEventListener('keyup', event => {
    key = event.key;
    keyState = false;
});

document.addEventListener('mousemove', event => {
    let rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

document.addEventListener('mousedown', event => {
    mouseButton = event.button;
    mouseState = true;
});

document.addEventListener('mouseup', event => {
    mouseButton = event.button;
    mouseState = false;
});