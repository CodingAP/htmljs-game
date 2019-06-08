class Player {
    constructor(x, y) {
        this.position = [x, y];
        this.size = 50;
        this.velocity = [0, 0];
        this.speed = 5;
    }

    show(context) {
        context.fillStyle = '#ffffff';
        context.fillRect(this.position[0] - this.size / 2, this.position[1] - this.size / 2, this.size, this.size);
    }

    update() {
        this.position[0] += this.velocity[0];
        this.position[1] += this.velocity[1];
    }

    getInput(key, state) {
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