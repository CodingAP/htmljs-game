class Player {
    constructor(x, y) {
        this.position = [x, y];
        this.size = 50;
    }

    show(context) {
        context.fillStyle = '#ffffff';
        context.fillRect(this.position[0] - this.size / 2, this.position[1] - this.size / 2, this.size, this.size);
    }
}