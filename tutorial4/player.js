class Player {
    constructor(x, y) {
        this.position = [x, y];
        this.angle = 0;
        this.scale = [1, 1];
        this.size = 50;
        this.velocity = [0, 0];
        this.speed = 5;
        this.color = '#ffffff';
    }

    show(context) {
        context.save();
        context.translate(this.position[0], this.position[1]);
        context.rotate(this.angle * (Math.PI / 180));
        context.scale(this.scale[0], this.scale[1]);
        context.fillStyle = this.color;
        context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
    }
    
    setAngle(angle) {
        this.angle = angle;
    }
    
    setScale(x, y) {
        this.scale = [x, y];
    }

    update() {
        this.position[0] += this.velocity[0];
        this.position[1] += this.velocity[1];
    }

    setPosition(x, y) {
        this.position = [x, y];
    }

    getMouseInput(button, state) {
        if (state) {
            if (button == 0) {
                this.color = '#ff0000';
            }
        } else {
            if (button == 0) {
                this.color = '#ffffff';
            }
        }
    }

    getKeyInput(key, state) {
        if (state) {
            if (key == 'a') {
                this.velocity[0] = -this.speed;
            } if (key == 'd') {
                this.velocity[0] = this.speed;
            } if (key == 'w') {
                this.velocity[1] = -this.speed;
            } if (key == 's') {
                this.velocity[1] = this.speed;
            }
        } else {
            if (key == 'a' || key == 'd') {
                this.velocity[0] = 0;
            } if (key == 'w' || key == 's') {
                this.velocity[1] = 0;
            }
        }
    }
}