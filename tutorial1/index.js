let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let player = new Player(canvas.width / 2, canvas.height / 2);

function loop() {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);

    player.show(context);

    window.requestAnimationFrame(loop);
}

loop();