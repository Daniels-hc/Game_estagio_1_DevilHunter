import Phaser from 'phaser';
import bgGame from './assets/bg_game_map.png';
import ground from './assets/ground.png';
import groundRecorte from './assets/ground_recorte.png';
import vergilTeste from './assets/vergil_sprite_sheet_parado_teste.png';
import vergilSketch from './assets/vergil_sprite_sheet_sketch.png';
import vergilestocada1 from './assets/dash_estocada/vergilestocada1.png';
import vergilestocada2 from './assets/dash_estocada/vergilestocada2.png';
import vergilestocada3 from './assets/dash_estocada/vergilestocada3.png';
import vergilestocada4 from './assets/dash_estocada/vergilestocada4.png';
import vergilestocada5 from './assets/dash_estocada/vergilestocada5.png';
import vergilestocada6 from './assets/dash_estocada/vergilestocada6.png';
import vergilestocada7 from './assets/dash_estocada/vergilestocada7.png';
import vergilestocada8 from './assets/dash_estocada/vergilestocada8.png';
import vergilestocada9 from './assets/dash_estocada/vergilestocada9.png';
import vergilestocada10 from './assets/dash_estocada/vergilestocada10.png';
import vergilestocada11 from './assets/dash_estocada/vergilestocada11.png';
import vergilparado1 from './assets/parado/vergilparado1.png';
import vergilparado2 from './assets/parado/vergilparado2.png';
import vergilparado3 from './assets/parado/vergilparado3.png';
import vergilparado4 from './assets/parado/vergilparado4.png';


var keyUp, keyDown, keyLeft, keyRight, keySPACE, keyENTER, keyA, keyS, keyD, keyZ, keyX, keyC;
{
    var p1_UP = 0;
    var p1_DOWN = 0;
    var p1_LEFT = 0;
    var p1_RIGHT = 0;
    var p1_SELECT = 0;
    var p1_START = 0;
    var p1_BT1 = 0;
    var p1_BT2 = 0;
    var p1_BT3 = 0;
    var p1_BT4 = 0;
    var p1_BT5 = 0;
    var p1_BT6 = 0;
    var key_p1_UP_pressed = 0;
    var key_p1_DOWN_pressed = 0;
    var key_p1_LEFT_pressed = 0;
    var key_p1_RIGHT_pressed = 0;
    var key_p1_SELECT_pressed = 0;
    var key_p1_START_pressed = 0;
    var key_p1_UP_hold = 0;
    var key_p1_DOWN_hold = 0;
    var key_p1_LEFT_hold = 0;
    var key_p1_RIGHT_hold = 0;
    var key_p1_SELECT_hold = 0;
    var key_p1_START_hold = 0;
    var key_p1_UP_released = 0;
    var key_p1_DOWN_released = 0;
    var key_p1_LEFT_released = 0;
    var key_p1_RIGHT_released = 0;
    var key_p1_SELECT_released = 0;
    var key_p1_START_released = 0;
    var key_p1_UP_status = 0;
    var key_p1_DOWN_status = 0;
    var key_p1_LEFT_status = 0;
    var key_p1_RIGHT_status = 0;
    var key_p1_SELECT_status = 0;
    var key_p1_START_status = 0;
    var key_p1_BT1_pressed = 0;
    var key_p1_BT2_pressed = 0;
    var key_p1_BT3_pressed = 0;
    var key_p1_BT4_pressed = 0;
    var key_p1_BT5_pressed = 0;
    var key_p1_BT6_pressed = 0;
    var key_p1_BT1_hold = 0;
    var key_p1_BT2_hold = 0;
    var key_p1_BT3_hold = 0;
    var key_p1_BT4_hold = 0;
    var key_p1_BT5_hold = 0;
    var key_p1_BT6_hold = 0;
    var key_p1_BT1_released = 0;
    var key_p1_BT2_released = 0;
    var key_p1_BT3_released = 0;
    var key_p1_BT4_released = 0;
    var key_p1_BT5_released = 0;
    var key_p1_BT6_released = 0;
    var key_p1_BT1_status = 0;
    var key_p1_BT2_status = 0;
    var key_p1_BT3_status = 0;
    var key_p1_BT4_status = 0;
    var key_p1_BT5_status = 0;
    var key_p1_BT6_status = 0;
}

{ // Variaveis de animacao
    var animName = 'vergilparado';
    var animID = 0;
    var animStart = 0;
    var animFrame = 1;
    var animTotFrames = 0;
    var animationEnd = 0;
    var moveList = [
        ['vergilparado', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],  //ID: 0
        ['vergilestocada', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   //ID: 1
    ];
}

var bgMap;
var groundStatic;
var player;
var cursors;
var x, y, frames = 0;
var sideControl = 0;
var downHold = 0;
var jumpControl = 0;
var hitControl = 0;
var controlAtaque = 0;
var runControl = 0;
var isFinal;


function preload() {
    this.load.image('bgGameMap', bgGame);
    this.load.image('ground', ground);
    // this.load.image('groundrecorte', groundRecorte);
    this.load.spritesheet('vergil', vergilSketch, { frameWidth: 110, frameHeight: 83 });
    //Idle
    {
        this.load.image('vergilparado1', vergilparado1);
        this.load.image('vergilparado2', vergilparado2);
        this.load.image('vergilparado3', vergilparado3);
        this.load.image('vergilparado4', vergilparado4);
        this.load.image('vergilparado5', vergilparado1);
        this.load.image('vergilparado6', vergilparado2);
        this.load.image('vergilparado7', vergilparado3);
        this.load.image('vergilparado8', vergilparado4);
        this.load.image('vergilparado9', vergilparado1);
        this.load.image('vergilparado10', vergilparado2);
        this.load.image('vergilparado11', vergilparado3);
    }
    //Dash estocada
    {
        this.load.image('vergilestocada1', vergilestocada1);
        this.load.image('vergilestocada2', vergilestocada2);
        this.load.image('vergilestocada3', vergilestocada3);
        this.load.image('vergilestocada4', vergilestocada4);
        this.load.image('vergilestocada5', vergilestocada5);
        this.load.image('vergilestocada6', vergilestocada6);
        this.load.image('vergilestocada7', vergilestocada7);
        this.load.image('vergilestocada8', vergilestocada8);
        this.load.image('vergilestocada9', vergilestocada9);
        this.load.image('vergilestocada10', vergilestocada10);
        this.load.image('vergilestocada11', vergilestocada11);
    }
}

function create() {

    bgMap = this.add.image(0, -170, 'bgGameMap').setOrigin(0, 0).setScrollFactor(1);
    groundStatic = this.physics.add.staticGroup();
    groundStatic.create(5020, 585, 'ground').setOrigin(0.5, 0.5);
    player = this.physics.add.sprite(100, 450, 'vergil').setScale(2).setOrigin(0.5, 0.5);
    // teste = this.add.sprite(200, 500, 'vergilestocada1').setScale(2);

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
    this.physics.world.setBounds(0, 0, 10000, bgMap.heightInPixels);
    this.physics.add.collider(player, groundStatic);


    // Animações criadas --------------------------------------------------------------------------------------------//
    { // PARADO ------------------------------------------------------------------------------
        this.anims.create({
            key: 'turnL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'turnR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        })
    }

    { // CORRER ------------------------------------------------------------------------------
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('vergil', { start: 34, end: 41 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('vergil', { start: 26, end: 33 }),
            frameRate: 10,
            repeat: -1
        })
    }

    {// ABAIXAR ----------------------------------------------------------------------------
        this.anims.create({
            key: 'downR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 8, end: 9 }),
            frameRate: 10,
            repeat: -1,
            repeatDelay: 10000
        })
        this.anims.create({
            key: 'downL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 17, end: 18 }),
            frameRate: 7,
            repeat: -1,
            repeatDelay: 10000
        })
    }

    { // PULAR ------------------------------------------------------------------------------
        this.anims.create({
            key: 'upR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 10, end: 12 }),
            frameRate: 3
        })
        this.anims.create({
            key: 'upL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 19, end: 21 }),
            frameRate: 3
        })
    }

    { // HITS NA TECLA A ------------------------------------------------------------------------------
        this.anims.create({
            key: 'hit1R',
            frames: this.anims.generateFrameNumbers('vergil', { start: 52, end: 69 }),
            frameRate: 13
        })
        this.anims.create({
            key: 'hit2R',
            frames: this.anims.generateFrameNumbers('vergil', { start: 70, end: 91 }),
            frameRate: 13
        })

        this.anims.create({
            key: 'hit1L',
            frames: this.anims.generateFrameNumbers('vergil', { start: 92, end: 109 }),
            frameRate: 13
        })
        this.anims.create({
            key: 'hit2L',
            frames: this.anims.generateFrameNumbers('vergil', { start: 110, end: 131 }),
            frameRate: 13
        })
    }

    { // HIT CARREGADO NA TECLA S -------------------------------------------------------------------------------
        this.anims.create({
            key: 'hit_carregadoR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 132, end: 134 }),
            frameRate: 8,
            repeat: 1,
            repeatDelay: 5000
        })
        this.anims.create({
            key: 'hit_carregadoR_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 135, end: 137 }),
            frameRate: 10
        })
        this.anims.create({
            key: 'hit_carregadoR_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 138, end: 142 }),
            frameRate: 8,
            repeat: 1,
            repeatDelay: 2000
        })

        this.anims.create({
            key: 'hit_carregadoL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 143, end: 145 }),
            frameRate: 8,
            repeat: 1,
            repeatDelay: 5000
        })
        this.anims.create({
            key: 'hit_carregadoL_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 146, end: 148 }),
            frameRate: 10
        })
        this.anims.create({
            key: 'hit_carregadoL_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 149, end: 153 }),
            frameRate: 8,
            repeat: 1,
            repeatDelay: 2000
        })
    }

    { // CORTE ESPECIAL PRA CIMA NA TECLA D ------------------------------------------------------------------------------
        this.anims.create({
            key: 'corte_especial_cimaR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 156, end: 163 }),
            frameRate: 15,
            repeat: 1,
            repeatDelay: 2000
        })
        this.anims.create({
            key: 'corte_especial_cima_parte2R',
            frames: this.anims.generateFrameNumbers('vergil', { start: 164, end: 172 }),
            frameRate: 13,
            repeat: 1,
            repeatDelay: 10000
        })

        this.anims.create({
            key: 'corte_especial_cimaL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 173, end: 180 }),
            frameRate: 15,
            repeat: 1,
            repeatDelay: 2000
        })
        this.anims.create({
            key: 'corte_especial_cima_parte2L',
            frames: this.anims.generateFrameNumbers('vergil', { start: 181, end: 189 }),
            frameRate: 13,
            repeat: 1,
            repeatDelay: 10000
        })
    }

    {// CORTE ESPECIAL PRA FRENTE NA TECLA Z ------------------------------------------------------------------------------
        this.anims.create({
            key: 'corte_especial_frenteR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 190, end: 193 }),
            frameRate: 10
        })
        this.anims.create({
            key: 'corte_especial_frenteR_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 194, end: 200 }),
            frameRate: 12
        })
        this.anims.create({
            key: 'corte_especial_frenteR_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 201, end: 213 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })

        this.anims.create({
            key: 'corte_especial_frenteL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 214, end: 217 }),
            frameRate: 10
        })
        this.anims.create({
            key: 'corte_especial_frenteL_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 218, end: 224 }),
            frameRate: 10
        })
        this.anims.create({
            key: 'corte_especial_frenteL_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 225, end: 237 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })
    }

    {// ESTOCADA PRA FRENTE NA TECLA X ------------------------------------------------------------------------------
        this.anims.create({
            key: 'dash_estocadaR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 238, end: 239 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })
        this.anims.create({
            key: 'dash_estocadaR_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 240, end: 245 }),
            frameRate: 15
        })
        this.anims.create({
            key: 'dash_estocadaR_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 246, end: 248 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })

        this.anims.create({
            key: 'dash_estocadaL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 249, end: 250 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })
        this.anims.create({
            key: 'dash_estocadaL_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 251, end: 256 }),
            frameRate: 15
        })
        this.anims.create({
            key: 'dash_estocadaL_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 257, end: 259 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })
    }

    {// CORTE ULTIMATE NA TECLA C ------------------------------------------------------------------------------
        this.anims.create({
            key: 'corte_ultimateR',
            frames: this.anims.generateFrameNumbers('vergil', { start: 260, end: 267 }),
            frameRate: 12,
            repeat: 1,
            repeatDelay: 10000
        })
        this.anims.create({
            key: 'corte_ultimateR_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 268, end: 280 }),
            frameRate: 30
        })
        this.anims.create({
            key: 'corte_ultimateR_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 281, end: 297 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })

        this.anims.create({
            key: 'corte_ultimateL',
            frames: this.anims.generateFrameNumbers('vergil', { start: 298, end: 305 }),
            frameRate: 12,
            repeat: 1,
            repeatDelay: 10000
        })
        this.anims.create({
            key: 'corte_ultimateL_parte2',
            frames: this.anims.generateFrameNumbers('vergil', { start: 306, end: 318 }),
            frameRate: 30
        })
        this.anims.create({
            key: 'corte_ultimateL_parte3',
            frames: this.anims.generateFrameNumbers('vergil', { start: 319, end: 335 }),
            frameRate: 10,
            repeat: 1,
            repeatDelay: 10000
        })
    }



    {//Controles do teclado -----------------------------------------------------------------------------------------//
        cursors = this.input.keyboard.createCursorKeys();
        keyUp = this.input.keyboard.addKey('UP');
        keyDown = this.input.keyboard.addKey('DOWN');
        keyLeft = this.input.keyboard.addKey('LEFT');
        keyRight = this.input.keyboard.addKey('RIGHT');
        keyA = this.input.keyboard.addKey('A');
        keyS = this.input.keyboard.addKey('S');
        keyD = this.input.keyboard.addKey('D');
        keyZ = this.input.keyboard.addKey('Z');
        keyX = this.input.keyboard.addKey('X');
        keyC = this.input.keyboard.addKey('C');
        keySPACE = this.input.keyboard.addKey('SPACE');
        keyENTER = this.input.keyboard.addKey('ENTER');
    }

    // keys = this.input.keyboard.addKeys('Q,W,E,R');

    var camera = this.cameras.main;
    camera.setBounds(0, 0, 10000, bgMap.heightInPixels);
    camera.startFollow(player, true, 0.05, 0.05).setOrigin(0.5, 1);
}


function update() {
    frames++;

    { // Checagem de teclas
        // Key status
        // 0 = Não pressionada
        // 1 = Apertou a tecla
        // 2 = Mantendo pressionada
        // 3 = Soltou a tecla

        if (keyUp.isDown) { p1_UP = 1; }
        if (!keyUp.isDown) { p1_UP = 0; }
        if (keyDown.isDown) { p1_DOWN = 1; }
        if (!keyDown.isDown) { p1_DOWN = 0; }
        if (keyLeft.isDown) { p1_LEFT = 1; }
        if (!keyLeft.isDown) { p1_LEFT = 0; }
        if (keyRight.isDown) { p1_RIGHT = 1; }
        if (!keyRight.isDown) { p1_RIGHT = 0; }
        if (keyA.isDown) { p1_BT1 = 1; }
        if (!keyA.isDown) { p1_BT1 = 0; }
        if (keyS.isDown) { p1_BT2 = 1; }
        if (!keyS.isDown) { p1_BT2 = 0; }
        if (keyD.isDown) { p1_BT3 = 1; }
        if (!keyD.isDown) { p1_BT3 = 0; }
        if (keyZ.isDown) { p1_BT4 = 1; }
        if (!keyZ.isDown) { p1_BT4 = 0; }
        if (keyX.isDown) { p1_BT5 = 1; }
        if (!keyX.isDown) { p1_BT5 = 0; }
        if (keyC.isDown) { p1_BT6 = 1; }
        if (!keyC.isDown) { p1_BT6 = 0; }
        if (keySPACE.isDown) { p1_SELECT = 1; }
        if (!keySPACE.isDown) { p1_SELECT = 0; }
        if (keyENTER.isDown) { p1_START = 1; }
        if (!keyENTER.isDown) { p1_START = 0; }


        if (p1_UP) {
            if (key_p1_UP_pressed == 1 && key_p1_UP_hold == 0) { key_p1_UP_hold = 1; key_p1_UP_pressed = 0; }
            if (key_p1_UP_pressed == 0 && key_p1_UP_hold == 0) { key_p1_UP_pressed = 1; }
        }
        if (!p1_UP) {
            if (key_p1_UP_released == 1) { key_p1_UP_released = 0; key_p1_UP_pressed = 0; key_p1_UP_hold = 0; }
            if (key_p1_UP_pressed > 0 || key_p1_UP_hold > 0) { key_p1_UP_released = 1; }
        }
        if (key_p1_UP_pressed == 0 && key_p1_UP_hold == 0 && key_p1_UP_released == 0) { key_p1_UP_status = 0; }
        if (key_p1_UP_pressed == 1) { key_p1_UP_status = 1; }
        if (key_p1_UP_hold == 1) { key_p1_UP_status = 2; }
        if (key_p1_UP_released == 1) { key_p1_UP_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_DOWN) {
            if (key_p1_DOWN_pressed == 1 && key_p1_DOWN_hold == 0) { key_p1_DOWN_hold = 1; key_p1_DOWN_pressed = 0; }
            if (key_p1_DOWN_pressed == 0 && key_p1_DOWN_hold == 0) { key_p1_DOWN_pressed = 1; }
        }
        if (!p1_DOWN) {
            if (key_p1_DOWN_released == 1) { key_p1_DOWN_released = 0; key_p1_DOWN_pressed = 0; key_p1_DOWN_hold = 0; }
            if (key_p1_DOWN_pressed > 0 || key_p1_DOWN_hold > 0) { key_p1_DOWN_released = 1; }
        }
        if (key_p1_DOWN_pressed == 0 && key_p1_DOWN_hold == 0 && key_p1_DOWN_released == 0) { key_p1_DOWN_status = 0; }
        if (key_p1_DOWN_pressed == 1) { key_p1_DOWN_status = 1; }
        if (key_p1_DOWN_hold == 1) { key_p1_DOWN_status = 2; }
        if (key_p1_DOWN_released == 1) { key_p1_DOWN_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_LEFT) {
            if (key_p1_LEFT_pressed == 1 && key_p1_LEFT_hold == 0) { key_p1_LEFT_hold = 1; key_p1_LEFT_pressed = 0; }
            if (key_p1_LEFT_pressed == 0 && key_p1_LEFT_hold == 0) { key_p1_LEFT_pressed = 1; }
        }
        if (!p1_LEFT) {
            if (key_p1_LEFT_released == 1) { key_p1_LEFT_released = 0; key_p1_LEFT_pressed = 0; key_p1_LEFT_hold = 0; }
            if (key_p1_LEFT_pressed > 0 || key_p1_LEFT_hold > 0) { key_p1_LEFT_released = 1; }
        }
        if (key_p1_LEFT_pressed == 0 && key_p1_LEFT_hold == 0 && key_p1_LEFT_released == 0) { key_p1_LEFT_status = 0; }
        if (key_p1_LEFT_pressed == 1) { key_p1_LEFT_status = 1; }
        if (key_p1_LEFT_hold == 1) { key_p1_LEFT_status = 2; }
        if (key_p1_LEFT_released == 1) { key_p1_LEFT_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_RIGHT) {
            if (key_p1_RIGHT_pressed == 1 && key_p1_RIGHT_hold == 0) { key_p1_RIGHT_hold = 1; key_p1_RIGHT_pressed = 0; }
            if (key_p1_RIGHT_pressed == 0 && key_p1_RIGHT_hold == 0) { key_p1_RIGHT_pressed = 1; }
        }
        if (!p1_RIGHT) {
            if (key_p1_RIGHT_released == 1) { key_p1_RIGHT_released = 0; key_p1_RIGHT_pressed = 0; key_p1_RIGHT_hold = 0; }
            if (key_p1_RIGHT_pressed > 0 || key_p1_RIGHT_hold > 0) { key_p1_RIGHT_released = 1; }
        }
        if (key_p1_RIGHT_pressed == 0 && key_p1_RIGHT_hold == 0 && key_p1_RIGHT_released == 0) { key_p1_RIGHT_status = 0; }
        if (key_p1_RIGHT_pressed == 1) { key_p1_RIGHT_status = 1; }
        if (key_p1_RIGHT_hold == 1) { key_p1_RIGHT_status = 2; }
        if (key_p1_RIGHT_released == 1) { key_p1_RIGHT_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT1) {
            if (key_p1_BT1_pressed == 1 && key_p1_BT1_hold == 0) { key_p1_BT1_hold = 1; key_p1_BT1_pressed = 0; }
            if (key_p1_BT1_pressed == 0 && key_p1_BT1_hold == 0) { key_p1_BT1_pressed = 1; }
        }
        if (!p1_BT1) {
            if (key_p1_BT1_released == 1) { key_p1_BT1_released = 0; key_p1_BT1_pressed = 0; key_p1_BT1_hold = 0; }
            if (key_p1_BT1_pressed > 0 || key_p1_BT1_hold > 0) { key_p1_BT1_released = 1; }
        }
        if (key_p1_BT1_pressed == 0 && key_p1_BT1_hold == 0 && key_p1_BT1_released == 0) { key_p1_BT1_status = 0; }
        if (key_p1_BT1_pressed == 1) { key_p1_BT1_status = 1; }
        if (key_p1_BT1_hold == 1) { key_p1_BT1_status = 2; }
        if (key_p1_BT1_released == 1) { key_p1_BT1_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT2) {
            if (key_p1_BT2_pressed == 1 && key_p1_BT2_hold == 0) { key_p1_BT2_hold = 1; key_p1_BT2_pressed = 0; }
            if (key_p1_BT2_pressed == 0 && key_p1_BT2_hold == 0) { key_p1_BT2_pressed = 1; }
        }
        if (!p1_BT2) {
            if (key_p1_BT2_released == 1) { key_p1_BT2_released = 0; key_p1_BT2_pressed = 0; key_p1_BT2_hold = 0; }
            if (key_p1_BT2_pressed > 0 || key_p1_BT2_hold > 0) { key_p1_BT2_released = 1; }
        }
        if (key_p1_BT2_pressed == 0 && key_p1_BT2_hold == 0 && key_p1_BT2_released == 0) { key_p1_BT2_status = 0; }
        if (key_p1_BT2_pressed == 1) { key_p1_BT2_status = 1; }
        if (key_p1_BT2_hold == 1) { key_p1_BT2_status = 2; }
        if (key_p1_BT2_released == 1) { key_p1_BT2_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT3) {
            if (key_p1_BT3_pressed == 1 && key_p1_BT3_hold == 0) { key_p1_BT3_hold = 1; key_p1_BT3_pressed = 0; }
            if (key_p1_BT3_pressed == 0 && key_p1_BT3_hold == 0) { key_p1_BT3_pressed = 1; }
        }
        if (!p1_BT3) {
            if (key_p1_BT3_released == 1) { key_p1_BT3_released = 0; key_p1_BT3_pressed = 0; key_p1_BT3_hold = 0; }
            if (key_p1_BT3_pressed > 0 || key_p1_BT3_hold > 0) { key_p1_BT3_released = 1; }
        }
        if (key_p1_BT3_pressed == 0 && key_p1_BT3_hold == 0 && key_p1_BT3_released == 0) { key_p1_BT3_status = 0; }
        if (key_p1_BT3_pressed == 1) { key_p1_BT3_status = 1; }
        if (key_p1_BT3_hold == 1) { key_p1_BT3_status = 2; }
        if (key_p1_BT3_released == 1) { key_p1_BT3_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT4) {
            if (key_p1_BT4_pressed == 1 && key_p1_BT4_hold == 0) { key_p1_BT4_hold = 1; key_p1_BT4_pressed = 0; }
            if (key_p1_BT4_pressed == 0 && key_p1_BT4_hold == 0) { key_p1_BT4_pressed = 1; }
        }
        if (!p1_BT4) {
            if (key_p1_BT4_released == 1) { key_p1_BT4_released = 0; key_p1_BT4_pressed = 0; key_p1_BT4_hold = 0; }
            if (key_p1_BT4_pressed > 0 || key_p1_BT4_hold > 0) { key_p1_BT4_released = 1; }
        }
        if (key_p1_BT4_pressed == 0 && key_p1_BT4_hold == 0 && key_p1_BT4_released == 0) { key_p1_BT4_status = 0; }
        if (key_p1_BT4_pressed == 1) { key_p1_BT4_status = 1; }
        if (key_p1_BT4_hold == 1) { key_p1_BT4_status = 2; }
        if (key_p1_BT4_released == 1) { key_p1_BT4_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT5) {
            if (key_p1_BT5_pressed == 1 && key_p1_BT5_hold == 0) { key_p1_BT5_hold = 1; key_p1_BT5_pressed = 0; }
            if (key_p1_BT5_pressed == 0 && key_p1_BT5_hold == 0) { key_p1_BT5_pressed = 1; }
        }
        if (!p1_BT5) {
            if (key_p1_BT5_released == 1) { key_p1_BT5_released = 0; key_p1_BT5_pressed = 0; key_p1_BT5_hold = 0; }
            if (key_p1_BT5_pressed > 0 || key_p1_BT5_hold > 0) { key_p1_BT5_released = 1; }
        }
        if (key_p1_BT5_pressed == 0 && key_p1_BT5_hold == 0 && key_p1_BT5_released == 0) { key_p1_BT5_status = 0; }
        if (key_p1_BT5_pressed == 1) { key_p1_BT5_status = 1; }
        if (key_p1_BT5_hold == 1) { key_p1_BT5_status = 2; }
        if (key_p1_BT5_released == 1) { key_p1_BT5_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_BT6) {
            if (key_p1_BT6_pressed == 1 && key_p1_BT6_hold == 0) { key_p1_BT6_hold = 1; key_p1_BT6_pressed = 0; }
            if (key_p1_BT6_pressed == 0 && key_p1_BT6_hold == 0) { key_p1_BT6_pressed = 1; }
        }
        if (!p1_BT6) {
            if (key_p1_BT6_released == 1) { key_p1_BT6_released = 0; key_p1_BT6_pressed = 0; key_p1_BT6_hold = 0; }
            if (key_p1_BT6_pressed > 0 || key_p1_BT6_hold > 0) { key_p1_BT6_released = 1; }
        }
        if (key_p1_BT6_pressed == 0 && key_p1_BT6_hold == 0 && key_p1_BT6_released == 0) { key_p1_BT6_status = 0; }
        if (key_p1_BT6_pressed == 1) { key_p1_BT6_status = 1; }
        if (key_p1_BT6_hold == 1) { key_p1_BT6_status = 2; }
        if (key_p1_BT6_released == 1) { key_p1_BT6_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_SELECT) {
            if (key_p1_SELECT_pressed == 1 && key_p1_SELECT_hold == 0) { key_p1_SELECT_hold = 1; key_p1_SELECT_pressed = 0; }
            if (key_p1_SELECT_pressed == 0 && key_p1_SELECT_hold == 0) { key_p1_SELECT_pressed = 1; }
        }
        if (!p1_SELECT) {
            if (key_p1_SELECT_released == 1) { key_p1_SELECT_released = 0; key_p1_SELECT_pressed = 0; key_p1_SELECT_hold = 0; }
            if (key_p1_SELECT_pressed > 0 || key_p1_SELECT_hold > 0) { key_p1_SELECT_released = 1; }
        }
        if (key_p1_SELECT_pressed == 0 && key_p1_SELECT_hold == 0 && key_p1_SELECT_released == 0) { key_p1_SELECT_status = 0; }
        if (key_p1_SELECT_pressed == 1) { key_p1_SELECT_status = 1; }
        if (key_p1_SELECT_hold == 1) { key_p1_SELECT_status = 2; }
        if (key_p1_SELECT_released == 1) { key_p1_SELECT_status = 3; }
        // -----------------------------------------------------------------------------------------------------------------------
        if (p1_START) {
            if (key_p1_START_pressed == 1 && key_p1_START_hold == 0) { key_p1_START_hold = 1; key_p1_START_pressed = 0; }
            if (key_p1_START_pressed == 0 && key_p1_START_hold == 0) { key_p1_START_pressed = 1; }
        }
        if (!p1_START) {
            if (key_p1_START_released == 1) { key_p1_START_released = 0; key_p1_START_pressed = 0; key_p1_START_hold = 0; }
            if (key_p1_START_pressed > 0 || key_p1_START_hold > 0) { key_p1_START_released = 1; }
        }
        if (key_p1_START_pressed == 0 && key_p1_START_hold == 0 && key_p1_START_released == 0) { key_p1_START_status = 0; }
        if (key_p1_START_pressed == 1) { key_p1_START_status = 1; }
        if (key_p1_START_hold == 1) { key_p1_START_status = 2; }
        if (key_p1_START_released == 1) { key_p1_START_status = 3; }

    }

    function controlAnim(animID) { //Controle de animação
        //total de frames  / quadros de movimento desta animação
        animTotFrames = moveList[animID].length - 1;

        var tempoTotal = 0;
        for (var i = 1; i < moveList[animID].length - (animTotFrames - animFrame); i++) {
            tempoTotal += moveList[animID][i];
        }
        if (frames >= animStart + tempoTotal) {
            animFrame++;
            if (animFrame > animTotFrames) {
                //animation end
                animationEnd = 1;
            }
            else {
                player.setTexture(animName + animFrame); //Muda o sprite
                if (animID == 1 && animFrame > 2 && animFrame < 9) {
                    player.x = player.x + 100;
                }
            }
        }
    }

    {// Maquina de estados
        //(start) estocada
        // if (animName == 'vergilparado' && key_p1_BT6_status == 1) {
        //     makeMove('vergilestocada');
        //     player.setVelocityX(900);
        // }

        // //(stop) estocada
        // if (animName == 'vergilestocada' && animationEnd == 1) {
        //     makeMove('vergilparado');
        // }

        //reseta a animação (movimentos com loop ifinito, exemplo 'parado')
        // if (animationEnd == 1) {
        //     makeMove();
        // }
    }

    //Função que atualiza as animações
    function makeMove(moveName) {
        if (moveName != null) {
            animName = moveName;
            for (var i = 0; i < moveList.length - 1; i++) {
                if (moveList[i][0] == moveName) {
                    animID == i;

                }
            }
        }
        animStart = frames;
        animFrame = 1;
        animTotFrames = moveList[animID].length - 1;
        animationEnd = 0;
        player.setTexture(animName + animFrame); //Muda o sprite
    }



    if (key_p1_LEFT_status > 0 && downHold == 0 && player.body.touching.down && runControl == 0) {
        player.setVelocityX(-200);
        player.anims.play('left', true);
        sideControl = 1;
        runControl = 1;
    }
    else if (key_p1_RIGHT_status > 0 && downHold == 0 && player.body.touching.down && runControl == 0) {
        player.setVelocityX(200);
        player.anims.play('right', true);
        sideControl = 0;
        runControl = 1;
    }
    else if (key_p1_DOWN_status > 0 && sideControl == 0) {
        player.anims.play('downR', true);
        downHold = 1;
    }
    else if (key_p1_DOWN_status > 0 && sideControl == 1) {
        player.anims.play('downL', true);
        downHold = 1;
    }
    else if (key_p1_UP_status > 0 && jumpControl == 0 && sideControl == 0) {
        player.setVelocityY(-500);
        jumpControl = 1;
        player.anims.play('upR', true);

    }
    else if (key_p1_UP_status && jumpControl == 0 && sideControl == 1) {
        player.setVelocityY(-500);
        jumpControl = 1;
        player.anims.play('upL', true);

    }
    else if (key_p1_BT1_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
        player.anims.play('hit1R', true)
        controlAtaque++;
        if (controlAtaque > 90) {
            player.anims.play('hit2R', true);
            hitControl = 1;
        }

    }
    else if (key_p1_BT1_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
        player.anims.play('hit1L', true);
        controlAtaque++;
        if (controlAtaque > 90) {
            player.anims.play('hit2L', true);
            hitControl = 1;
        }

    }
    else if (key_p1_BT2_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('hit_carregadoR', true);


        if (controlAtaque > 25) {
            controlAtaque++;
            player.anims.play('hit_carregadoR_parte2', true).setVelocityX(1200);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('hit_carregadoR_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }

    }
    else if (key_p1_BT2_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('hit_carregadoL', true);

        if (controlAtaque > 25) {
            controlAtaque++;
            player.anims.play('hit_carregadoL_parte2', true).setVelocityX(-1200);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('hit_carregadoL_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }

    }
    else if (key_p1_BT3_status > 0 && sideControl == 0 && hitControl == 0 && player.body.touching.down && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_especial_cimaR', true);

        // this.tweens.add({
        //     targets: player,
        //     x: distNoAtaque,
        //     y: 300,
        //     duration: 2000,
        //     ease: 'Expo.easeInOut',
        //     completeDelay: 1000
        // });

        if (controlAtaque > 35) {
            player.anims.play('corte_especial_cima_parte2R', true);
            player.x += 250;
            player.y += -160;
            hitControl = 1;
        }
    }
    else if (key_p1_BT3_status > 0 && sideControl == 1 && hitControl == 0 && player.body.touching.down && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_especial_cimaL', true);

        if (controlAtaque > 35) {
            player.anims.play('corte_especial_cima_parte2L', true);
            player.x -= 250;
            player.y += -160;
            hitControl = 1;
        }
    }
    else if (key_p1_BT4_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_especial_frenteR', true);

        if (controlAtaque > 30) {
            controlAtaque++;
            player.anims.play('corte_especial_frenteR_parte2', true).setVelocityX(1200);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('corte_especial_frenteR_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else if (key_p1_BT4_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_especial_frenteL', true);

        if (controlAtaque > 30) {
            controlAtaque++;
            player.anims.play('corte_especial_frenteL_parte2', true).setVelocityX(-1200);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('corte_especial_frenteL_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else if (key_p1_BT5_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('dash_estocadaR', true);

        if (controlAtaque > 25) {
            controlAtaque++;
            player.anims.play('dash_estocadaR_parte2', true).setVelocityX(600);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('dash_estocadaR_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else if (key_p1_BT5_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('dash_estocadaL', true);

        if (controlAtaque > 25) {
            controlAtaque++;
            player.anims.play('dash_estocadaL_parte2', true).setVelocityX(-600);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('dash_estocadaL_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else if (key_p1_BT6_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_ultimateR', true);

        if (controlAtaque > 40) {
            controlAtaque++;
            player.anims.play('corte_ultimateR_parte2', true).setVelocityX(2400);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('corte_ultimateR_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else if (key_p1_BT6_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
        controlAtaque++;
        player.anims.play('corte_ultimateL', true);

        if (controlAtaque > 40) {
            controlAtaque++;
            player.anims.play('corte_ultimateL_parte2', true).setVelocityX(-2400);
            hitControl = 1;

            player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                player.anims.play('corte_ultimateL_parte3', true).setVelocityX(0);
                hitControl = 1;

            }, player);
        }
    }
    else {
        if (cursors.right.isUp && sideControl == 0 && player.body.touching.down && key_p1_BT1_status == 0
            && key_p1_BT2_status == 0 && key_p1_BT3_status == 0 && key_p1_BT4_status == 0 && key_p1_BT5_status == 0
            && key_p1_BT6_status == 0) {
            player.setVelocityX(0);
            player.anims.play('turnR', true);
            downHold = 0;
            jumpControl = 0;
            hitControl = 0;
            controlAtaque = 0;
            runControl = 0;
        }
        if (cursors.left.isUp && sideControl == 1 && player.body.touching.down && key_p1_BT1_status == 0
            && key_p1_BT2_status == 0 && key_p1_BT3_status == 0 && key_p1_BT4_status == 0 && key_p1_BT5_status == 0
            && key_p1_BT6_status == 0) {
            player.setVelocityX(0);
            player.anims.play('turnL', true);
            downHold = 0;
            jumpControl = 0;
            hitControl = 0;
            controlAtaque = 0;
            runControl = 0;
        }
    }

}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    pixelArt: true,
    zoom: 1.0,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
