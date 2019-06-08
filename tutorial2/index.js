let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let key = '', state = false;

document.addEventListener('keydown', event => {
    key = event.key;
    state = true;
});

document.addEventListener('keyup', event => {
    key = event.key;
    state = false;
});

let player = new Player(canvas.width / 2, canvas.height / 2);

function loop() {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);

    player.show(context);
    player.update();
    player.getInput(key, state);

    window.requestAnimationFrame(loop);
}

loop();