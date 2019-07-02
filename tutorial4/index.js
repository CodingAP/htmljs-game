let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let player = new Player(canvas.width / 2, canvas.height / 2);

let temp = 0;

function loop() {
    temp += 0.01;
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);
    
    player.setAngle(Math.sin(temp) * 180);
    player.setScale(Math.sin(temp) * 5, Math.sin(temp) * 5);

    player.show(context);
    player.update();
    player.setPosition(mouseX, mouseY);
    player.getMouseInput(mouseButton, mouseState);
    player.getKeyInput(key, keyState);

    window.requestAnimationFrame(loop);
}

loop();