import fundoPlayerWins from './assets/Tela_final_wins_assets/tela_final_wins.png';
import tituloWins from './assets/Tela_final_wins_assets/titulo_tela_final_wins.png';
import buttonTentarWins from './assets/Tela_final_wins_assets/buttontentar_tela_final_wins.png';
import buttonHomeWins from './assets/Tela_final_wins_assets/buttonhome_tela_final_wins.png';
import musicFinalPW from './assets/sound_effects/Manifest_It_player_wins.mp3';

class TelaFinalPlayerWins extends Phaser.Scene {

    constructor() {
        super("TelaFinalPlayerWins");
    }

    preload() {
        this.load.image("fundoPlayerWins", fundoPlayerWins);
        this.load.image("tituloWins", tituloWins);
        this.load.image("buttonTentarWins", buttonTentarWins);
        this.load.image("buttonHomeWins", buttonHomeWins);

        this.load.audio('musicPW', musicFinalPW);
    }

    create() {
        var music = this.sound.add('musicPW', { volume: 0.3, loop: true });
        music.play();

        this.add.image(0, 0, "fundoPlayerWins").setOrigin(0, 0);
        this.titulo = this.add.image(0, 0, "tituloWins").setOrigin(0, 0);
        this.titulo.visible = 1;
        this.titulo_timer = 0;

        this.buttonTentar = this.add.image(500, 390, "buttonTentarWins").setOrigin(0.5, 0.5);
        this.buttonHome = this.add.image(500, 510, "buttonHomeWins").setOrigin(0.5, 0.5);
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

export default TelaFinalPlayerWins;