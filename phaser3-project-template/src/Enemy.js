class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'death').setScale(2).setOrigin(0.5, 0.5);
        this.scene = scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
    };

    update() {
        var dir = 0;
        var vel = 2;
        frames++;
        if (frames < 100 && dir == 0) {
            this.play('deathidle', true);
        }
        if (frames > 100) {
            dir = 1;
            this.play('deathidleL', true);
        }
        if (dir == 1 && frames > 200) {
            dir = -1;
            frames = 0;
            this.play('deathidle', true);
        }
        this.x += vel * dir;

    }

}

export default Enemy;