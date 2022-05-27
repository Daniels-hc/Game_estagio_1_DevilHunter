import Phaser from 'phaser';
import Game from "./game";
import TelaInicial from "./tela_inicial";
import TelaFinalGameOver from "./tela_final_game_over";
import TelaFinalPlayerWins from "./tela_final_player_wins";


window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 1000,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        pixelArt: true,
        zoom: 1.0,
        scene: [TelaInicial, Game,
            TelaFinalPlayerWins,
            TelaFinalGameOver]
    };

    const game = new Phaser.Game(config);

    window.focus();
}
