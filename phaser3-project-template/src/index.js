import Phaser from 'phaser';
import Enemy_Explode from './enemy_explode';
import { Physics } from 'phaser';
import bgGame from './assets/bg_game_map.png';
import ground from './assets/ground.png';
import vergilSketch from './assets/vergil_sprite_sheet_sketch.png';
import inimigoSketch from './assets/inimigo_death_sprite_sheet.png';
import bossSketch from './assets/boss_alrox_sprite_sheet.png';
import sisterSketch from './assets/sister_elwyn_sprite.png';
import animationKill from './assets/animation_kill_sprite_sheet.png';
import slash from './assets/slash-red.png';
import flare from './assets/flare_azul.png';



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


{// Variaveis globais -------------------------------------------------------------------------------//
    {// Variáveis player ----------------------------//
        var bgMap;
        var flare_slash;
        var flare_azul;
        var flareTimer_slash = 0;
        var flareTimer_azul = 0;
        var groundStatic;
        var player;
        var hitBoxPlayer;
        var hitBoxPlayerInvertido;
        var playerHealth = 100;
        var elwyn;
    }
    {// Váriaveis inimigos -------------------// 
        var hitBoxEnemy;
        var hitBoxEnemy2;
        var hitBoxEnemy3;
        var hitBoxEnemy4;
        var hitBoxEnemy5;
        var hitBoxEnemy6;
        var hitBoxEnemy7;
        var hitBoxBoss;

        var boss;
        var group_enemy;
        var death;
        var death2;
        var death3;
        var death4;
        var death5;
        var death6;
        var death7;

        var enemyHealth = 3;
        var enemyHealth2 = 3;
        var enemyHealth3 = 3;
        var enemyHealth4 = 3;
        var enemyHealth5 = 3;
        var enemyHealth6 = 3;
        var enemyHealth7 = 3;
        var bossHealth = 6;
        var enemy_explode;
    }

    {// Variáveis de controle --------------------- //
        var destroyControl = 0;
        var graphics;
        var dir = 0;
        var vel = 1.5;
        var cursors;
        var frames = 0;
        var sideControl = 0;
        var downHold = 0;
        var jumpControl = 0;
        var hitControl = 0;
        var controlAtaque = 0;
        var runControl = 0;
        var isAttack;
        var e_attack;
        var imune = 0;
        var kill;
    }
}

function preload() {
    this.load.image('bgGameMap', bgGame);
    this.load.image('ground', ground);
    // this.load.image('groundrecorte', groundRecorte);
    this.load.spritesheet('vergil', vergilSketch, { frameWidth: 110, frameHeight: 83 });
    this.load.spritesheet('death', inimigoSketch, { frameWidth: 70, frameHeight: 69 });
    this.load.spritesheet('elwyn', sisterSketch, { frameWidth: 155, frameHeight: 60 });
    this.load.spritesheet('boss', bossSketch, { frameWidth: 110, frameHeight: 120 });
    this.load.spritesheet('kill', animationKill, { frameWidth: 75, frameHeight: 127 });
    this.load.image('slash', slash);
    this.load.image('flare', flare);

}


function create() {

    bgMap = this.add.image(0, -170, 'bgGameMap').setOrigin(0, 0).setScrollFactor(1);
    kill = this.add.sprite(0, 0, 'kill').setOrigin(0.5, 0.5);
    kill.visible = 0;

    groundStatic = this.physics.add.staticGroup();
    groundStatic.create(5020, 585, 'ground').setOrigin(0.5, 0.5);

    player = this.physics.add.sprite(100, 450, 'vergil').setScale(2).setOrigin(0.5, 0.5);
    player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(50, 13);

    hitBoxPlayer = new Phaser.Geom.Rectangle(player.x + 40, player.y, 100, 105);
    hitBoxPlayerInvertido = new Phaser.Geom.Rectangle(player.x - 40, player.y, 100, 105);


    // graphics = this.add.graphics({ fillStyle: { color: 0x0000ff, alpha: 0.5 } });
    // graphics.fillRectShape(hitBoxPlayerInvertido);


    this.physics.add.existing(hitBoxPlayer);
    this.physics.add.existing(hitBoxPlayerInvertido);

    elwyn = this.physics.add.sprite(9800, 50, 'elwyn').setScale(1).setOrigin(0.5, 0.5);
    elwyn.setBodySize(elwyn.width, elwyn.height * 0.50).setOffset(0, 21);

    boss = this.physics.add.sprite(9500, 50, 'boss').setScale(2).setOrigin(0.5, 0.5);
    boss.setBodySize(boss.width * 0.45, boss.height * 0.75).setOffset(32, 30);
    hitBoxBoss = new Phaser.Geom.Rectangle(boss.x, boss.y, 180, 170);

    // graphics.fillRectShape(hitBoxBoss);
    this.physics.add.existing(hitBoxBoss);


    {// INIMIGOS -------------------------------------------------------------------------//  
        group_enemy = this.physics.add.group({
            runChildUpdate: true,
            bounceY: 0.1,
            collideWorldBounds: true,
            gravityY: 300,
        });
        death = group_enemy.create(800, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death2 = group_enemy.create(800 * 2 + 200, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death3 = group_enemy.create(800 * 3 + 400, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death4 = group_enemy.create(800 * 4 + 600, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death5 = group_enemy.create(800 * 5 + 800, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death6 = group_enemy.create(800 * 6 + 1000, 450, 'death').setScale(2).setOrigin(0.5, 0.5);
        death7 = group_enemy.create(800 * 7 + 1200, 450, 'death').setScale(2).setOrigin(0.5, 0.5);

        death.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death2.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death3.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death4.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death5.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death6.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);
        death7.setBodySize(death.width * 0.32, death.height * 0.65).setOffset(29, 24);

        hitBoxEnemy = new Phaser.Geom.Rectangle(death.x, death.y, 110, 105);
        hitBoxEnemy2 = new Phaser.Geom.Rectangle(death2.x, death2.y, 110, 105);
        hitBoxEnemy3 = new Phaser.Geom.Rectangle(death3.x, death3.y, 110, 105);
        hitBoxEnemy4 = new Phaser.Geom.Rectangle(death4.x, death4.y, 110, 105);
        hitBoxEnemy5 = new Phaser.Geom.Rectangle(death5.x, death5.y, 110, 105);
        hitBoxEnemy6 = new Phaser.Geom.Rectangle(death6.x, death6.y, 110, 105);
        hitBoxEnemy7 = new Phaser.Geom.Rectangle(death7.x, death7.y, 110, 105);
        // graphics.fillRectShape(hitBoxEnemy);
        // graphics.fillRectShape(hitBoxEnemy2);
        // graphics.fillRectShape(hitBoxEnemy3);
        // graphics.fillRectShape(hitBoxEnemy4);
        // graphics.fillRectShape(hitBoxEnemy5);
        // graphics.fillRectShape(hitBoxEnemy6);
        // graphics.fillRectShape(hitBoxEnemy7);
        this.physics.add.existing(hitBoxEnemy);
        this.physics.add.existing(hitBoxEnemy2);
        this.physics.add.existing(hitBoxEnemy3);
        this.physics.add.existing(hitBoxEnemy4);
        this.physics.add.existing(hitBoxEnemy5);
        this.physics.add.existing(hitBoxEnemy6);
        this.physics.add.existing(hitBoxEnemy7);
    }

    { // Fisicas -----------------------------------------------------//
        player.setCollideWorldBounds(true);
        player.body.setGravityY(300);
        this.physics.world.setBounds(0, 0, 10000, bgMap.heightInPixels);
        this.physics.add.collider(player, groundStatic);

        elwyn.setCollideWorldBounds(true);
        elwyn.body.setGravityY(300);
        this.physics.add.collider(elwyn, groundStatic);

        boss.setCollideWorldBounds(true);
        boss.body.setGravityY(300);
        this.physics.add.collider(boss, groundStatic);

        this.physics.add.collider(group_enemy, groundStatic);
        this.physics.add.collider(kill, groundStatic);
        // this.physics.add.collider(hitBox, groundStatic);
        // this.physics.add.collider(group_enemy, player);
    }

    flare_slash = this.add.image(death.x - 120, death.y + 10, 'slash').setOrigin(0.5, 0.5).setScale(2);
    flare_slash.visible = 0;
    flare_azul = this.add.image(player.x + 35, player.y + 35, 'flare').setOrigin(0.5, 0.5);
    flare_azul.visible = 0;


    {// Animações player --------------------------------------------------------------------------------------------//
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

        { // DANO -----------------------------------------------------------------------------//
            this.anims.create({
                key: 'damageR',
                frames: this.anims.generateFrameNumbers('vergil', { start: 15, end: 15 }),
                frameRate: 5
            })
            this.anims.create({
                key: 'damageL',
                frames: this.anims.generateFrameNumbers('vergil', { start: 24, end: 24 }),
                frameRate: 5
            })
        }

        { // MORTE ----------------------------------------------------------------------- //
            this.anims.create({
                key: 'morteR',
                frames: this.anims.generateFrameNumbers('vergil', { start: 16, end: 16 }),
                frameRate: 5
            })
            this.anims.create({
                key: 'morteL',
                frames: this.anims.generateFrameNumbers('vergil', { start: 25, end: 25 }),
                frameRate: 5
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
    }

    { // Animações inimigos Death -------------------------------------------------------------------------------------------//
        this.anims.create({
            key: 'deathidle',
            frames: this.anims.generateFrameNumbers('death', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: 'deathidleL',
            frames: this.anims.generateFrameNumbers('death', { start: 3, end: 5 }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: 'deathDamage',
            frames: this.anims.generateFrameNumbers('death', { start: 6, end: 8 }),
            frameRate: 8
        })

        this.anims.create({
            key: 'deathDamageL',
            frames: this.anims.generateFrameNumbers('death', { start: 9, end: 11 }),
            frameRate: 8
        })

        this.anims.create({
            key: 'deathSlash',
            frames: this.anims.generateFrameNumbers('death', { start: 12, end: 19 }),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'deathSlashL',
            frames: this.anims.generateFrameNumbers('death', { start: 20, end: 27 }),
            frameRate: 20,
            repeat: -1
        })
    }

    { // Animações boss Alrox ----------------------------------------------------------------------------------------------//
        this.anims.create({
            key: 'bossidleL',
            frames: this.anims.generateFrameNumbers('boss', { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'bossidleR',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'bossmoveR',
            frames: this.anims.generateFrameNumbers('boss', { start: 8, end: 9 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'bossmoveL',
            frames: this.anims.generateFrameNumbers('boss', { start: 10, end: 11 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'bossataqueR',
            frames: this.anims.generateFrameNumbers('boss', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'bossataqueL',
            frames: this.anims.generateFrameNumbers('boss', { start: 16, end: 19 }),
            frameRate: 10,
            repeat: -1
        })
    }

    this.anims.create({
        key: 'killEnemy',
        frames: this.anims.generateFrameNumbers('kill', { start: 0, end: 10 }),
        frameRate: 15,
        repeat: 0
    })


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
    {// Camera -----------------------//
        var camera = this.cameras.main;
        camera.setBounds(0, 0, 10000, bgMap.heightInPixels);
        camera.startFollow(player, true, 0.05, 0.05).setOrigin(0.5, 1);
    }
}






function colisaoAttack({ hitbox, inimigo }) {
    return (
        hitbox.x + hitbox.width + 20 >= inimigo.x && hitbox.x <= inimigo.x + 20 + inimigo.width
        && hitbox.y + hitbox.height >= inimigo.y && hitbox.y <= inimigo.y + inimigo.height
    )
}

function attackEnemy({ hitbox, jogador }) {
    return (
        hitbox.x + hitbox.width + 20 >= jogador.x && hitbox.x <= jogador.x - 60 + jogador.width
        && hitbox.y + hitbox.height + 20 >= jogador.y && hitbox.y <= jogador.y - 10 + jogador.height
    )
}

function update() {

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

    { // Testes -----------------------//
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
    }

    hitBoxPlayer.x = player.x + 10;
    hitBoxPlayer.y = player.y + -20;
    hitBoxPlayerInvertido.x = player.x - 110;
    hitBoxPlayerInvertido.y = player.y + -20;
    hitBoxEnemy.x = death.x - 54;
    hitBoxEnemy.y = death.y - 30;
    hitBoxEnemy2.x = death2.x - 54;
    hitBoxEnemy2.y = death2.y - 30;
    hitBoxEnemy3.x = death3.x - 54;
    hitBoxEnemy3.y = death3.y - 30;
    hitBoxEnemy4.x = death4.x - 54;
    hitBoxEnemy4.y = death4.y - 30;
    hitBoxEnemy5.x = death5.x - 54;
    hitBoxEnemy5.y = death5.y - 30;
    hitBoxEnemy6.x = death6.x - 54;
    hitBoxEnemy6.y = death6.y - 30;
    hitBoxEnemy7.x = death7.x - 54;
    hitBoxEnemy7.y = death7.y - 30;
    hitBoxBoss.x = boss.x - 90;
    hitBoxBoss.y = boss.y - 50;

    // if (isAttack) {
    //     graphics.fillRectShape(hitBoxPlayer);
    //     graphics.clear();
    // }
    // graphics.clear();
    // graphics.fillRectShape(hitBoxPlayer);
    // graphics.fillRectShape(hitBoxPlayerInvertido);

    // graphics.fillRectShape(hitBoxEnemy);
    // graphics.fillRectShape(hitBoxEnemy2);
    // graphics.fillRectShape(hitBoxEnemy3);
    // graphics.fillRectShape(hitBoxEnemy4);
    // graphics.fillRectShape(hitBoxEnemy5);
    // graphics.fillRectShape(hitBoxEnemy6);
    // graphics.fillRectShape(hitBoxEnemy7);
    // graphics.fillRectShape(hitBoxBoss);


    function attack() {
        isAttack = true;
        setTimeout(() => {
            isAttack = false;
        }, 1000)
    };
    function enemyAttack() {
        e_attack = true;
        setTimeout(() => {
            e_attack = false;
        }, 700)
    };

    { // Efeitos de corte ------------------------------------------------------------------------- //
        if (flareTimer_slash > 0) {
            flareTimer_slash -= 0.1;
            flare_slash.alpha = flareTimer_slash;
            flare_slash.scaleX = flareTimer_slash;
            flare_slash.scaleY = flareTimer_slash;
        } else {
            flare_slash.visible = 0;
        }

        if (flareTimer_azul > 0) {
            flareTimer_azul -= 0.1;
            flare_azul.alpha = flareTimer_azul;
            flare_azul.scaleX = flareTimer_azul;
            flare_azul.scaleY = flareTimer_azul;
        } else {
            flare_azul.visible = 0;
        }

        flare_azul.x = player.x + 35;
        flare_azul.y = player.y + 10;

        function slashFlare(x, y) {
            flare_slash.x = x;
            flare_slash.y = y + 10;
            flare_slash.visible = 1;
            flareTimer_slash = 2;
        }

        function azulFlare() {
            flare_azul.visible = 1;
            flareTimer_azul = 1.5;
        }
    }

    {// Colisão de ataques do player com a hitboxplayer -------------------------------------------------------------//
        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death })
            && isAttack) {
            isAttack = false;
            enemyHealth--;
            death.x += 70;
            slashFlare(death.x, death.y);
            death.anims.play('deathDamage', true);
        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death })
            && isAttack) {
            isAttack = false;
            enemyHealth--;
            death.x -= 70;
            slashFlare(death.x, death.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death2 })
            && isAttack) {
            isAttack = false;
            enemyHealth2--;
            death2.x += 70;
            slashFlare(death2.x, death2.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death2 })
            && isAttack) {
            isAttack = false;
            enemyHealth2--;
            death2.x -= 70;
            slashFlare(death2.x, death2.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death3 })
            && isAttack) {
            isAttack = false;
            enemyHealth3--;
            death3.x += 70;
            slashFlare(death3.x, death3.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death3 })
            && isAttack) {
            isAttack = false;
            enemyHealth3--;
            death3.x -= 70;
            slashFlare(death3.x, death3.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death4 })
            && isAttack) {
            isAttack = false;
            enemyHealth4--;
            death4.x += 70;
            slashFlare(death4.x, death4.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death4 })
            && isAttack) {
            isAttack = false;
            enemyHealth4--;
            death4.x -= 70;
            slashFlare(death4.x, death4.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death5 })
            && isAttack) {
            isAttack = false;
            enemyHealth5--;
            death5.x += 70;
            slashFlare(death5.x, death5.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death5 })
            && isAttack) {
            isAttack = false;
            enemyHealth5--;
            death5.x -= 70;
            slashFlare(death5.x, death5.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death6 })
            && isAttack) {
            isAttack = false;
            enemyHealth6--;
            death6.x += 70;
            slashFlare(death6.x, death6.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death6 })
            && isAttack) {
            isAttack = false;
            enemyHealth6--;
            death6.x -= 70;
            slashFlare(death6.x, death6.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: death7 })
            && isAttack) {
            isAttack = false;
            enemyHealth7--;
            death7.x += 70;
            slashFlare(death7.x, death7.y);
            death.anims.play('deathDamage', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: death7 })
            && isAttack) {
            isAttack = false;
            enemyHealth7--;
            death7.x -= 70;
            slashFlare(death7.x, death7.y);
            death.anims.play('deathDamageL', true);
            console.log('go')
        };

        if (colisaoAttack({ hitbox: hitBoxPlayer, inimigo: boss })
            && isAttack) {
            isAttack = false;
            bossHealth--;
            boss.x += 70;
            slashFlare(boss.x, boss.y);
            boss.anims.play('bossmoveL', true);

        };
        if (colisaoAttack({ hitbox: hitBoxPlayerInvertido, inimigo: boss })
            && isAttack) {
            isAttack = false;
            bossHealth--;
            boss.x -= 70;
            slashFlare(boss.x, boss.y);
            boss.anims.play('bossmoveR', true);
            console.log('go')
        };
    }


    { // Ataque do inimigos deaths --------------------------------------------//
        if (attackEnemy({ hitbox: hitBoxEnemy, jogador: player })
            && dir == -1 && imune == 0 && sideControl == 0) {
            death.anims.play('deathSlash', true);
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy, jogador: player })
            && dir == 1 && imune == 0 && sideControl == 1) {
            death.anims.play('deathSlashL', true);
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy2, jogador: player })
            && dir == -1 && imune == 0) {
            death2.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy2, jogador: player })
            && dir == 1 && imune == 0) {
            death2.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy3, jogador: player })
            && dir == -1 && imune == 0) {
            death3.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy3, jogador: player })
            && dir == 1 && imune == 0) {
            death3.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy4, jogador: player })
            && dir == -1 && imune == 0) {
            death4.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy4, jogador: player })
            && dir == 1 && imune == 0) {
            death4.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy5, jogador: player })
            && dir == -1 && imune == 0) {
            death5.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy5, jogador: player })
            && dir == 1 && imune == 0) {
            death5.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy6, jogador: player })
            && dir == -1 && imune == 0) {
            death6.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy6, jogador: player })
            && dir == 1 && imune == 0) {
            death6.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxEnemy7, jogador: player })
            && dir == -1 && imune == 0) {
            death7.anims.play('deathSlash', true)
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxEnemy7, jogador: player })
            && dir == 1 && imune == 0) {
            death7.anims.play('deathSlashL', true)
            e_attack = false;
            if (dir == -1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };

        if (attackEnemy({ hitbox: hitBoxBoss, jogador: player })
            && dir == -1 && imune == 0) {
            boss.anims.play('bossataqueL', true);
            e_attack = false;
            if (dir == 1) {
                player.x -= 40;
            } else {
                player.x -= 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
        if (attackEnemy({ hitbox: hitBoxBoss, jogador: player })
            && dir == 1 && imune == 0) {
            boss.anims.play('bossataqueR', true)
            e_attack = false;
            if (dir == 1) {
                player.x += 40;
            } else {
                player.x += 40;
            }
            azulFlare();
            playerHealth -= 5;
            document.querySelector('#playerHealth').style.width = playerHealth + '%';
        };
    }


    {// Controles do player --------------------------------------------------------------------------------------------//
        if (key_p1_LEFT_status > 0 && downHold == 0 && player.body.touching.down && runControl == 0) {
            player.setVelocityX(-250);
            player.setBodySize(player.width * 0.30, player.height * 0.85).setOffset(38, 13);
            player.anims.play('left', true);
            sideControl = 1;
            runControl = 1;
        }
        else if (key_p1_RIGHT_status > 0 && downHold == 0 && player.body.touching.down && runControl == 0) {
            player.setVelocityX(250);
            player.setBodySize(player.width * 0.30, player.height * 0.85).setOffset(38, 13);
            player.anims.play('right', true);
            sideControl = 0;
            runControl = 1;
        }
        else if (key_p1_DOWN_status > 0 && sideControl == 0) {
            player.setBodySize(player.width * 0.25, player.height * 0.57).setOffset(48, 36);
            player.anims.play('downR', true);
            downHold = 1;
        }
        else if (key_p1_DOWN_status > 0 && sideControl == 1) {
            player.setBodySize(player.width * 0.25, player.height * 0.57).setOffset(38, 36);
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
            player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(37, 13);
            player.anims.play('hit1R', true)
            controlAtaque++;
            if (controlAtaque > 90) {
                player.anims.play('hit2R', true);
                hitControl = 1;
            }

        }
        else if (key_p1_BT1_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
            player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(49, 13);
            player.anims.play('hit1L', true);
            controlAtaque++;
            if (controlAtaque > 90) {
                player.anims.play('hit2L', true);
                hitControl = 1;
            }

        }
        else if (key_p1_BT2_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(48, 13);
            player.anims.play('hit_carregadoR', true);

            if (controlAtaque > 25) {
                controlAtaque++;
                player.anims.play('hit_carregadoR_parte2', true).setVelocityX(800);
                hitControl = 1;
                attack();
                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('hit_carregadoR_parte3', true).setVelocityX(0);
                    attack();
                    hitControl = 1;

                }, player);
            }

        }
        else if (key_p1_BT2_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(38, 13);
            player.anims.play('hit_carregadoL', true);

            if (controlAtaque > 25) {
                controlAtaque++;
                player.anims.play('hit_carregadoL_parte2', true).setVelocityX(-800);
                hitControl = 1;
                attack();
                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('hit_carregadoL_parte3', true).setVelocityX(0);
                    attack();
                    hitControl = 1;

                }, player);
            }

        }
        else if (key_p1_BT3_status > 0 && sideControl == 0 && hitControl == 0 && player.body.touching.down && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(40, 30);
            player.anims.play('corte_especial_cimaR', true);

            if (controlAtaque > 35) {
                player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(30, 30);
                player.anims.play('corte_especial_cima_parte2R', true);
                player.x += 250;
                player.y += -120;
                attack();
                hitControl = 1;
            }
        }
        else if (key_p1_BT3_status > 0 && sideControl == 1 && hitControl == 0 && player.body.touching.down && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(30, 30);
            player.anims.play('corte_especial_cimaL', true);

            if (controlAtaque > 35) {
                player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(46, 30);
                player.anims.play('corte_especial_cima_parte2L', true);
                player.x -= 250;
                player.y += -120;
                attack();
                hitControl = 1;
            }
        }
        else if (key_p1_BT4_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.40, player.height * 0.65).setOffset(41, 30);
            player.anims.play('corte_especial_frenteR', true);

            if (controlAtaque > 30) {
                controlAtaque++;
                player.anims.play('corte_especial_frenteR_parte2', true).setVelocityX(1200);
                imune = 1;
                attack();
                hitControl = 1;

                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('corte_especial_frenteR_parte3', true).setVelocityX(0);
                    hitControl = 1;

                }, player);
            }
        }
        else if (key_p1_BT4_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.40, player.height * 0.65).setOffset(31, 30);
            player.anims.play('corte_especial_frenteL', true);

            if (controlAtaque > 30) {
                controlAtaque++;
                player.anims.play('corte_especial_frenteL_parte2', true).setVelocityX(-1200);
                imune = 1;
                attack();
                hitControl = 1;

                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('corte_especial_frenteL_parte3', true).setVelocityX(0);
                    hitControl = 1;

                }, player);
            }
        }
        else if (key_p1_BT5_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.30, player.height * 0.85).setOffset(35, 13);
            player.anims.play('dash_estocadaR', true);

            if (controlAtaque > 25) {
                controlAtaque++;
                player.anims.play('dash_estocadaR_parte2', true).setVelocityX(600);
                attack();
                hitControl = 1;

                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('dash_estocadaR_parte3', true).setVelocityX(0);
                    hitControl = 1;

                }, player);
            }
        }
        else if (key_p1_BT5_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.30, player.height * 0.85).setOffset(40, 13);
            player.anims.play('dash_estocadaL', true);

            if (controlAtaque > 25) {
                controlAtaque++;
                player.anims.play('dash_estocadaL_parte2', true).setVelocityX(-600);
                attack();
                hitControl = 1;

                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('dash_estocadaL_parte3', true).setVelocityX(0);
                    hitControl = 1;

                }, player);
            }
        }
        else if (key_p1_BT6_status > 0 && sideControl == 0 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(37, 30);
            player.anims.play('corte_ultimateR', true);

            if (controlAtaque > 40) {
                controlAtaque++;
                player.anims.play('corte_ultimateR_parte2', true).setVelocityX(2000);
                imune = 1;
                attack();
                hitControl = 1;

                player.once('animationcomplete', function () { ///this refers to an arcade sprite.
                    player.anims.play('corte_ultimateR_parte3', true).setVelocityX(0);
                    hitControl = 1;

                }, player);
            }
        }
        else if (key_p1_BT6_status > 0 && sideControl == 1 && hitControl == 0 && runControl == 0) {
            controlAtaque++;
            player.setBodySize(player.width * 0.35, player.height * 0.65).setOffset(36, 30);
            player.anims.play('corte_ultimateL', true);

            if (controlAtaque > 40) {
                controlAtaque++;
                player.anims.play('corte_ultimateL_parte2', true).setVelocityX(-2000);
                imune = 1;
                attack();
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
                player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(50, 13);
                player.anims.play('turnR', true);
                downHold = 0;
                jumpControl = 0;
                hitControl = 0;
                controlAtaque = 0;
                runControl = 0;
                imune = 0;
            }
            if (cursors.left.isUp && sideControl == 1 && player.body.touching.down && key_p1_BT1_status == 0
                && key_p1_BT2_status == 0 && key_p1_BT3_status == 0 && key_p1_BT4_status == 0 && key_p1_BT5_status == 0
                && key_p1_BT6_status == 0) {
                player.setVelocityX(0);
                player.setBodySize(player.width * 0.25, player.height * 0.85).setOffset(35, 13);
                player.anims.play('turnL', true);
                downHold = 0;
                jumpControl = 0;
                hitControl = 0;
                controlAtaque = 0;
                runControl = 0;
                imune = 0;
            }
        }
    }

    {// Animações inimigos Death--------------------------------------------------------------------------------------//
        frames++;
        if (frames < 100 && dir == 0) {
            death.anims.play('deathidle', true);
            death2.anims.play('deathidle', true);
            death3.anims.play('deathidle', true);
            death4.anims.play('deathidle', true);
            death5.anims.play('deathidle', true);
            death6.anims.play('deathidle', true);
            death7.anims.play('deathidle', true);
            boss.anims.play('bossidleL', true);
            enemyAttack();
        }
        if (frames > 100) {
            dir = 1;
            death.anims.play('deathidleL', true);
            death2.anims.play('deathidleL', true);
            death3.anims.play('deathidleL', true);
            death4.anims.play('deathidleL', true);
            death5.anims.play('deathidleL', true);
            death6.anims.play('deathidleL', true);
            death7.anims.play('deathidleL', true);
            boss.anims.play('bossmoveR', true);
            enemyAttack();
        }
        if (dir == 1 && frames > 200) {
            dir = -1;
            frames = 0;
            death.anims.play('deathidle', true);
            death2.anims.play('deathidle', true);
            death3.anims.play('deathidle', true);
            death4.anims.play('deathidle', true);
            death5.anims.play('deathidle', true);
            death6.anims.play('deathidle', true);
            death7.anims.play('deathidle', true);
            boss.anims.play('bossmoveL', true);
            enemyAttack();
        }
        death.x += vel * dir;
        death2.x += vel * dir;
        death3.x += vel * dir;
        death4.x += vel * dir;
        death5.x += vel * dir;
        death6.x += vel * dir;
        death7.x += vel * dir;
        boss.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death2.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death2.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death2.anims.play('deathidle', true);
        // }
        // death2.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death3.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death3.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death3.anims.play('deathidle', true);
        // }
        // death3.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death4.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death4.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death4.anims.play('deathidle', true);
        // }
        // death4.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death5.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death5.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death5.anims.play('deathidle', true);
        // }
        // death5.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death6.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death6.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death6.anims.play('deathidle', true);
        // }
        // death6.x += vel * dir;

        // if (frames < 100 && dir == 0) {
        //     death7.anims.play('deathidle', true);
        // }
        // if (frames > 100) {
        //     dir = 1;
        //     death7.anims.play('deathidleL', true);
        // }
        // if (dir == 1 && frames > 200) {
        //     dir = -1;
        //     frames = 0;
        //     death7.anims.play('deathidle', true);
        // }
        // death7.x += vel * dir;

    }

    {// Morte do inimigos ---------------------------------------------------------------------//
        if (enemyHealth == 0 && destroyControl == 0) {
            kill.x = death.x;
            kill.y = death.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death.body.enable = false;

            death.visible = 0;
            death.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });

        }
        if (enemyHealth2 == 0 && destroyControl == 0) {
            kill.x = death2.x;
            kill.y = death2.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death2.body.enable = false;

            death2.visible = 0;
            death2.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (enemyHealth3 == 0 && destroyControl == 0) {
            kill.x = death3.x;
            kill.y = death3.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death3.body.enable = false;

            death3.visible = 0;
            death3.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (enemyHealth4 == 0 && destroyControl == 0) {
            kill.x = death4.x;
            kill.y = death4.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death4.body.enable = false;

            death4.visible = 0;
            death4.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (enemyHealth5 == 0 && destroyControl == 0) {
            kill.x = death5.x;
            kill.y = death5.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death5.body.enable = false;

            death5.visible = 0;
            death5.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (enemyHealth6 == 0 && destroyControl == 0) {
            kill.x = death6.x;
            kill.y = death6.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death6.body.enable = false;

            death6.visible = 0;
            death6.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (enemyHealth7 == 0 && destroyControl == 0) {
            kill.x = death7.x;
            kill.y = death7.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true);
            death7.body.enable = false;

            death7.visible = 0;
            death7.y += 0.7;
            // death.anims.play('killEnemy', true)
            // death.once('animationcomplete', () => { death.body.enable = false; });
        }
        if (bossHealth == 0 && destroyControl == 0) {
            kill.x = boss.x;
            kill.y = boss.y;
            kill.visible = 1;
            kill.anims.play('killEnemy', true).setScale(2);
            boss.body.enable = false;

            boss.visible = 0;
            boss.y += 0.7;
            // death.anims.play('killEnemy', true)
            kill.once('animationcomplete', () => { kill.anims.play('killEnemy', false) });
        }
    }

};


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