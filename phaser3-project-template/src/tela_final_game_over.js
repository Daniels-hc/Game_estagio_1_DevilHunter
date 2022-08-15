import fundoGameOver from './assets/Tela_final_gameover_assets/fundo_tela_final_gameover.png';
import titulo from './assets/Tela_final_gameover_assets/titulo_tela_final_gameover.png';
import buttonTentar from './assets/Tela_final_gameover_assets/buttontentar_tela_final_gameover.png';
import buttonHome from './assets/Tela_final_gameover_assets/buttonhome_tela_final_gameover.png';
import musicFinalGO from './assets/sound_effects/Anomalous_hedges_tela_final.mp3';

class TelaFinalGameOver extends Phaser.Scene {

    constructor() {
        super("TelaFinalGameOver");
    }

    preload() {
        this.load.image("fundoGameOver", fundoGameOver);
        this.load.image("titulo", titulo);
        this.load.image("buttonTentar", buttonTentar);
        this.load.image("buttonHome", buttonHome);

        this.load.audio('musicGO', musicFinalGO);
    }

    create() {
        var ocultarHP = document.querySelector('#healthbar').style.display = "none";

        var music = this.sound.add('musicGO', { volume: 0.3, loop: true });
        music.play();

        this.add.image(0, 0, "fundoGameOver").setOrigin(0, 0);
        this.titulo = this.add.image(0, 0, "titulo").setOrigin(0, 0);
        this.titulo.visible = 1;
        this.titulo_timer = 0;

        this.buttonTentar = this.add.image(500, 335, "buttonTentar").setOrigin(0.5, 0.5);
        this.buttonHome = this.add.image(500, 455, "buttonHome").setOrigin(0.5, 0.5);
        this.buttonHome.visible = 0;
        this.buttonTentar.visible = 0;

        this.buttonTentar.setInteractive();
        this.buttonHome.setInteractive();

        this.buttonTentar.on("pointerdown", () => [this.scene.start("Game"), music.stop()]);
        this.buttonHome.on("pointerdown", () => [this.scene.start("TelaInicial"), music.stop()]);
    }

    update() {
        this.titulo_timer += 0.01;
        this.titulo.alpha = this.titulo_timer;

        if (this.titulo_timer > 1.8) {
            this.buttonTentar.visible = 1;
            this.buttonHome.visible = 1;
        }

    }
}

export default TelaFinalGameOver;