import fundo from './assets/Tela_inicial_assets/Fundo_tela_inicial.png';
import logo from './assets/Tela_inicial_assets/Logo_tela_inicial.png';
import buttonPlay from './assets/Tela_inicial_assets/button-play.png';
import autor from './assets/Tela_inicial_assets/autor_tela_inicial.png';
import buttonComandos from './assets/Tela_inicial_assets/button-comandos.png';
import musicHome from './assets/sound_effects/Addict-tela-inicial.mp3';

class TelaInicial extends Phaser.Scene {

    constructor() {
        super("TelaInicial");
    }

    preload() {
        this.load.image("fundo", fundo);
        this.load.image("logo", logo);
        this.load.image("buttonPlay", buttonPlay);
        this.load.image("buttonComandos", buttonComandos);
        this.load.image("autor", autor);

        this.load.audio('musicHome', musicHome);
    }

    create() {
        var music = this.sound.add('musicHome', { volume: 0.2, loop: true });
        music.play();

        this.fundo = this.add.tileSprite(0, 0, 1000, 600, "fundo").setOrigin(0, 0);
        this.add.image(0, 0, "logo").setOrigin(0, 0);
        this.add.image(0, -10, "autor").setOrigin(0, 0);
        let buttonPlay = this.add.image(500, 330, "buttonPlay").setOrigin(0.5, 0.5).setScale(0.4);
        let buttonComandos = this.add.image(500, 460, "buttonComandos").setOrigin(0.5, 0.5).setScale(0.4);
        buttonPlay.setInteractive();
        buttonComandos.setInteractive();

        buttonPlay.on("pointerdown", () => [this.scene.start("Game"), music.stop()]);
        buttonComandos.on("pointerdown", () => [this.scene.start("TelaComandos"), music.stop()]);
    }

    update() {
        this.fundo.tilePositionX += 1.5
    }
}

export default TelaInicial;