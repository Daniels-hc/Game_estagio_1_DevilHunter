import fundoComandos from './assets/Tela_comandos_assets/fundo_tela_comandos.png';
import filtroGradiente from './assets/Tela_comandos_assets/filtroGradiente_tela_comandos.png';
import tituloComandos from './assets/Tela_comandos_assets/titulo_tela_comandos.png';
import textoAtaque from './assets/Tela_comandos_assets/comandosAtaque_tela_comandos.png';
import textoMovimento from './assets/Tela_comandos_assets/comandosMovimento_tela_comandos.png';
import buttonVoltar from './assets/Tela_comandos_assets/buttonVoltar_tela_comandos.png';
import textoObs from './assets/Tela_comandos_assets/obs_tela_comandos.png';


class TelaComandos extends Phaser.Scene {

    constructor() {
        super("TelaComandos");
    }

    preload() {
        this.load.image("fundoComandos", fundoComandos);
        this.load.image("filtro", filtroGradiente);
        this.load.image("tituloComandos", tituloComandos);
        this.load.image("textoAtaque", textoAtaque);
        this.load.image("textoMovimento", textoMovimento);
        this.load.image("buttonVoltar", buttonVoltar);
        this.load.image("textoObs", textoObs);

        // this.load.audio('musicHome', musicHome);
    }

    create() {
        // var music = this.sound.add('musicHome', { volume: 0.2, loop: true });
        // music.play();

        this.fundo = this.add.tileSprite(0, 0, 1000, 600, "fundoComandos").setOrigin(0, 0);
        this.add.image(0, 0, "filtro").setOrigin(0, 0);
        this.add.image(0, -20, "tituloComandos").setOrigin(0, 0);
        this.add.image(0, -10, "textoAtaque").setOrigin(0, 0);
        this.add.image(0, -10, "textoMovimento").setOrigin(0, 0);
        this.add.image(0, 0, "textoObs").setOrigin(0, 0);

        let buttonVoltar = this.add.image(500, 525, "buttonVoltar").setOrigin(0.5, 0.5);
        buttonVoltar.setInteractive();

        buttonVoltar.on("pointerdown", () => [this.scene.start("TelaInicial")]);

    }

    update() {
        this.fundo.tilePositionX += 1.5
    }
}

export default TelaComandos;