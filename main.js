 
var game = function() {
    var Q = window.Q = Quintus()
        .include("Sprites, Scenes, Input, Touch, UI, 2D, TMX, Anim, Audio")
        .setup({width: 800, height: 640})
        .controls().touch()
        .enableSound();

    Q.scene("nivel1", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel1.tmx", stage);

        Q.state.set("goalScore", 1);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 1);
        Q.state.set("siguienteNivel", 2);
        Q.state.set("terminado", false);

        //Obstaculos
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:265, B:5}));
    });

    Q.scene("nivel2", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel2.tmx", stage);

        Q.state.set("goalScore", 1);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 2);
        Q.state.set("siguienteNivel", 3);
        Q.state.set("terminado", false);

        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 240, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 278, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 316, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 354, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 392, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:303, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:341, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:379, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:417, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:455, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 430, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 392, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 354, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 316, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 278, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
        stage.insert(new Q.Obstaculo_rectangular({x:493, y: 240, PSIX:303, PSIY: 240, PIDX:493, PIDY:430}));
    });

    Q.scene("nivel3", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel3.tmx", stage);

        Q.state.set("goalScore", 0);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 3);
        Q.state.set("siguienteNivel", 4);
        Q.state.set("terminado", false);

        //Obstaculos
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:290, B:5}));
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:290, B:5, C: 5}));
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:290, B:5, C: 10}));
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:290, B:5, C: 15}));
        stage.insert(new Q.Obstaculo_circular({x: 350, y: 355, sentido: true, A:290, B:5, C: 20}));
    });

    Q.scene("nivel4", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel4.tmx", stage);

        Q.state.set("goalScore", 1);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 4);
        Q.state.set("siguienteNivel", 5);
        Q.state.set("terminado", false);
        
        //Obstaculos
        stage.insert(new Q.Obstaculo_lineal({recorrido: 108, sentido: false, duration: 1, x: 400, y: 330}));

        stage.insert(new Q.Obstaculo_lineal({recorrido: 108, duration: 1, x: 433, y: 407}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 108, sentido: false, duration: 1, x: 464, y: 265}));

        stage.insert(new Q.Obstaculo_lineal({recorrido: 108, duration: 1, x: 498, y: 342}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 108, sentido: false, duration: 1, x: 530, y: 200}));
    });

    Q.scene("nivel_5", function(stage){ //Hemos decidido eliminar este nivel del juego final ya que generaba problemas de colisiones multiples con objetos dejando al jugador sin vidas
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel_5.tmx", stage);

        Q.state.set("goalScore", 3);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 5);
        Q.state.set("siguienteNivel", 6);
        Q.state.set("terminado", false);
    });

    Q.scene("nivel5", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel5.tmx", stage);

        Q.state.set("goalScore", 0);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 5);
        Q.state.set("siguienteNivel", 6);
        Q.state.set("terminado", false);
        
        //Obstaculos

        //Laberinto
        stage.insert(new Q.Obstaculo_camino({x:206, y:176, ruta:[{x:206, y:176, t:0.8125}, {x:176, y:176, t:0.1875}, {x:176, y:336, t:1}, {x:496, y:336, t:2}, {x:496, y:496, t:1}, {x:336, y:496, t:1}, {x:336, y:176, t:2}]}));
        stage.insert(new Q.Obstaculo_camino({x:206, y:176, ruta:[{x:206, y:176, t:0.1875}, {x:336, y:176, t:0.8125}, {x:336, y:496, t:2}, {x:496, y:496, t:1}, {x:496, y:336, t:1}, {x:176, y:336, t:2}, {x:176, y:176, t:1}]}));
        stage.insert(new Q.Obstaculo_camino({x:466, y:496, ruta:[{x:466, y:496, t:0.1875}, {x:336, y:496, t:0.8125}, {x:336, y:176, t:2}, {x:176, y:176, t:1}, {x:176, y:336, t:1}, {x:496, y:336, t:2}, {x:496, y:496, t:1}]}));

        //Horizontales
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:592, y:464, vertical: false, sentido: false}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:656, y:400, vertical: false}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:592, y:336, vertical: false, sentido: false}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:656, y:272, vertical: false}));

        //Verticales
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:464, y:176, sentido: false}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:506, y:240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 64, duration: 0.5, x:548, y:176, sentido: false}));
    });

    Q.scene("nivel6", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel6.tmx", stage);

        Q.state.set("goalScore", 2);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 6);
        Q.state.set("siguienteNivel", 7);
        Q.state.set("terminado", false);
        
        //Obstaculos
        //Rectanglares
        stage.insert(new Q.Obstaculo_rectangular({sentido: false, x:510, y: 240, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));
        stage.insert(new Q.Obstaculo_rectangular({sentido: false, x:484, y: 240, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));
        stage.insert(new Q.Obstaculo_rectangular({sentido: false, x:460, y: 240, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));
        stage.insert(new Q.Obstaculo_rectangular({x:460, y: 290, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));
        stage.insert(new Q.Obstaculo_rectangular({x:460, y: 264, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));
        stage.insert(new Q.Obstaculo_rectangular({x:460, y: 240, PSIX:460, PSIY: 240, PIDX:655, PIDY:464}));

        //Verticales
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 150, y: 240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 219, duration: 1, x: 180, y: 464}));
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 210, y: 240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 219, duration: 1, x: 240, y: 464}));
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 270, y: 240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 219, duration: 1, x: 300, y: 464}));
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 330, y: 240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 219, duration: 1, x: 360, y: 464}));
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 390, y: 240}));
        stage.insert(new Q.Obstaculo_lineal({recorrido: 219, duration: 1, x: 420, y: 464}));
        stage.insert(new Q.Obstaculo_lineal({sentido: false, recorrido: 219, duration: 1, x: 450, y: 240}));
    });

    Q.scene("nivel7", function(stage){
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        Q.stageTMX("nivel7.tmx", stage);

        Q.state.set("goalScore", 0);
        Q.state.set("currentScore", 0);
        Q.state.set("nivel", 7);
        Q.state.set("siguienteNivel", "final");
        Q.state.set("terminado", false);

        //Obstaculos
        stage.insert(new Q.Obstaculo_camino({x:108, y :335, 
            ruta:[{x:108, y :335, t:1}, {x:622, y: 335, t:0.5}, {x:622, y: 270, t:0.5},
            {x:720, y: 270, t:0.5}, {x:720, y: 400, t:0.5}, {x:622, y: 400, t:0.5}, {x:622, y: 335, t:0.5}]
        }));

        stage.insert(new Q.Obstaculo_camino({x:108, y :335, 
            ruta:[{x:108, y :335, t:3}, {x:622, y: 335, t:3},{x:622, y: 400, t:1},
            {x:720, y: 400, t:1}, {x:720, y: 270, t:1}, {x:622, y: 270, t:1}, {x:622, y: 335, t:1}]
        }));
    });

    Q.scene('hud', function(stage) {
        var buttonHome = new Q.UI.Button({x:50, y:30, asset: 'home.png'}); 
        stage.insert(buttonHome);
        buttonHome.on("click", function() {
            Q.clearStages();
            Q.stageScene("mainMenu");
        });

        var box = stage.insert(new Q.UI.Container({x: Q.width/2 - 315, y: 60}))
        var vidas = box.insert(new Q.Vidas());
        var niveles = box.insert(new Q.Nivel());
        var godMode = box.insert(new Q.Modo_dios());
    });

    Q.scene('creditos_scene', function(stage) {
    	var box = stage.insert(new Q.UI.Container({x: 100, y: 60}));

        var button = stage.insert(new Q.UI.Button({x:Q.width/2, y:450, asset: 'home2.png'}));
        button.on("click", function() {
            Q.clearStages();
            Q.stageScene('mainMenu');
        });

        var credits = stage.insert(new Q.Creditos());

        box.fit(20);
    });

    Q.Sprite.extend("Titulo", {
        init: function(p) {
            this._super(p, {
                asset: "tittle.png"
            });
        }
    });

    Q.scene('mainMenu', function(stage) {
        stage.insert(new Q.Repeater({ asset: "fondo.png", speedX: 0.5, speedY: 0.5, type: 0 }));

        stage.insert(new Q.Titulo({x: Q.width/2, y: 180}));

        var box = stage.insert(new Q.UI.Container({x: Q.width/2, y: 350}));
        
        var buttonPlay = box.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                               label: "Play" }));
        buttonPlay.on("click", function() {
            Q.stageScene("hud", 1);
            Q.stageScene("nivel1", 0);
        });

        var buttonCredits = box.insert(new Q.UI.Button({ x: 0, y: 100, fill: "#CCCCCC",
                                               label: "Créditos" }));
        buttonCredits.on("click", function() {
            Q.stageScene("creditos_scene", 0);
        });

        stage.insert(new Q.Obstaculo_camino({x:Q.width/2 - 100, y :300, 
            ruta:[{x:Q.width/2 - 100, y :300, t:0.5}, {x:Q.width/2 + 100, y: 300, t:0.5},
            {x:Q.width/2 + 100, y :400, t:0.5}, {x:Q.width/2 - 100, y :400, t:0.5},
            {x:Q.width/2 - 100, y :500, t:0.5}, {x:Q.width/2 + 100, y :500, t:0.5},
            {x:Q.width/2 + 100, y :400, t:0.5}, {x:Q.width/2 - 100, y :400, t:0.5}]
        }));

        stage.insert(new Q.Obstaculo_camino({x:Q.width/2 + 100, y :300, 
            ruta:[{x:Q.width/2 + 100, y :300, t:0.5}, {x:Q.width/2 - 100, y: 300, t:0.5},
            {x:Q.width/2 - 100, y :400, t:0.5}, {x:Q.width/2 + 100, y :400, t:0.5},
            {x:Q.width/2 + 100, y :500, t:0.5}, {x:Q.width/2 - 100, y :500, t:0.5},
            {x:Q.width/2 - 100, y :400, t:0.5}, {x:Q.width/2 + 100, y :400, t:0.5}]
        }));
    });

    Q.loadTMX("home.png, home2.png, tittle.png, credits.png, player.png, obstacle.png, meta.png, fondo.png, nivel1.tmx, nivel2.tmx, nivel3.tmx," + 
        "nivel4.tmx, nivel5.tmx, nivel6.tmx, nivel7.tmx, vida.png, vida.json, moneda.png,moneda.json, coin.mp3, hit.mp3", function() {
        Q.compileSheets("vida.png","vida.json");
        Q.compileSheets("moneda.png","moneda.json");
        Q.compileSheets("player_anim.png","player_anim.json");

        Q.state.reset({goalScore: 1, currentScore: 0, lifes: 3, godMode: 0, nivel: 1, siguienteNivel: "nivel2", terminado: false, estado: 0});
        Q.stageScene('mainMenu');
    });

    Q.animations("vida_anim", {
        blink: {frames: [0, 1, 2, 1], rate: 1/3, flip: false, loop: true},
    });

    Q.animations("moneda_anim", {
        blink: {frames: [0, 1, 2, 3, 2, 1], rate: 1/3, flip: false, loop: true},
    });

    Q.Sprite.extend("Player", {
        init: function(p) {
            this._super(p, {
                asset: "player.png"
            });

            this.p.gravity = 0;

            this.add('2d, myControls, animation');

            Q.input.on("fire",this,"godMode");
            Q.state.on("change.estado", this, "cambioEstado");
        },

        cambioEstado : function(){
            this.del("myControls, 2d"); //quito el 2d para que no siga colisionando y no haga movimientos raros el player
        },

        godMode : function() {
        	if(Q.state.get("godMode") == 0) {
        		Q.state.set("godMode", 1);
        	}else {
        		Q.state.set("godMode", 0);
        	}
        }
    });

    Q.Sprite.extend("Vida", {
        init: function(p) {
            this._super(p, {
                sprite: "vida_anim",
                sheet: "vida",
                sensor: true
            });

            this.add('animation');
            
            this.play("blink");

            this.on("sensor", function() {
                Q.state.inc("lifes", 1);
                this.destroy();
            });
        }
    });

    Q.Sprite.extend("Moneda", {
        init: function(p) {
            this._super(p, {
                sprite: "moneda_anim",
                sheet: "moneda",
                sensor: true
            });

            this.add('animation');
            
            this.play("blink");

            this.on("sensor", function() {
                Q.audio.play('coin.mp3');
                Q.state.inc("currentScore", 1);
                this.destroy();
            });
        }
    });

    Q.Sprite.extend("Meta", {
        init: function(p) {
            this._super(p, {
                asset: "meta.png",
                sensor: true,
                cogido: false
            });

            this.on('sensor', function() {
            	if(!this.p.cogido && Q.state.get("currentScore") == Q.state.get("goalScore")){
            		if(Q.state.get("siguienteNivel") == "final") {
                        Q.stageScene("endGame", 2);
                        Q.state.set("estado", 2);
                    }   
                    else 
                        Q.stageScene("nivel" + Q.state.get("siguienteNivel"), 0);
            		
                    this.p.cogido = true
            	}
            });
        }
    });

    Q.component('defaultObstacle', {
        added: function() {
            this.entity.add('tween');
            this.entity.p.hitted = false;

            this.entity.on('playerDead', function() {
            	this.destroy();
            });
            
            this.entity.on('sensor', function() {
                if(Q.state.get("godMode") == 0) {
                    if (!this.p.hitted) {
                        this.p.hitted = true;
                        Q.audio.play('hit.mp3');
                        if(Q.state.get("lifes") > 0) {
                            this.trigger('playerDead');
                            Q.state.dec("lifes", 1);
                			Q.stageScene("nivel" + Q.state.get("nivel"), 0);
                        }else {
                            Q.stageScene("nivel1", 0);
                            Q.state.set("lifes", 3);
                        }
                    }
                }
            });
        }
    });


    /**
        Obstaculo que se mantiene parado en una posicion
    **/
    Q.Sprite.extend('Obstaculo_estatico', {
        init: function(p) {
            this._super(p, {
                asset: 'obstacle.png',
                sensor: true
            });

            this.add('defaultObstacle');
        }
    });

    /**
        Obstaculo que se mueve o verticalemte u horizontalmento de manera lineal o constante
    **/
    Q.Sprite.extend('Obstaculo_lineal', {
        init: function(p) {
            this._super(p, {
                duration: 1,
                asset: 'obstacle.png',
                vertical: true,
                sentido: true, //A true empieza hacia arriba o hacia la izquierda. A False hacia abajo o hacia la derecha
                recorrido: 200,
                sensor: true
            });

            this.add('defaultObstacle');  

            if (this.p.sentido)
                this.upOrLeft();    
            else
                this.downOrRight();
        },

        upOrLeft: function() {
            if (this.p.vertical)
                this.animate({y : this.p.y - this.p.recorrido}, this.p.duration, Q.Easing.Linear, {callback: this.downOrRight});
            else
                this.animate({x : this.p.x - this.p.recorrido}, this.p.duration, Q.Easing.Linear, {callback: this.downOrRight});
        },

        downOrRight: function() {
            if (this.p.vertical)
                this.animate({y : this.p.y + this.p.recorrido}, this.p.duration, Q.Easing.Linear, {callback: this.upOrLeft});
            else
                this.animate({x : this.p.x + this.p.recorrido}, this.p.duration, Q.Easing.Linear, {callback: this.upOrLeft});
        }
    });

    /**
        Obstaculo que se mueve siguiendo una serie de puntos ciclicamente
    **/
    Q.Sprite.extend('Obstaculo_camino', {
        init: function(p) {
            this._super(p, {
                duration: 1,
                asset: 'obstacle.png',
                sensor: true,
                i: 1
            });

            this.add('defaultObstacle');  

            this.move();
        },

        move: function() {
            this.animate({x : this.p.ruta[this.p.i].x, y : this.p.ruta[this.p.i].y}, this.p.ruta[this.p.i].t, Q.Easing.Linear, {callback: this.move});
            this.p.i = (this.p.i + 1) % this.p.ruta.length;
        }
    });

	/**
        Obstaculo que se mueve circularmente
    **/
    Q.Sprite.extend('Obstaculo_circular', {
        init: function(p) {
            this._super(p, {
                asset: 'obstacle.png',
                sentido: true, //A true sentido antihorario, a false sentido horario
                A: 0,
                B: 0,
                C: 0,
                t: 0,
                sensor: true
            });

            this.add('defaultObstacle');
        },

        step: function(dt) {
        	this.p.t += dt;
        	if(this.p.sentido){
				this.p.vx = this.p.A * Math.sin(this.p.B * this.p.t + this.p.C);
				this.p.vy = this.p.A * Math.cos(this.p.B * this.p.t + this.p.C);
				this.p.x += this.p.vx * dt;
				this.p.y += this.p.vy * dt;
        	}else{
        		this.p.vx = this.p.A * Math.cos(this.p.B * this.p.t + this.p.C);
				this.p.vy = this.p.A * Math.sin(this.p.B * this.p.t + this.p.C);
				this.p.x += this.p.vx * dt;
				this.p.y += this.p.vy * dt;
        	}
        }
    });

    /**
        Obstaculo que se mueve formando un rectangulo
    **/
    Q.Sprite.extend('Obstaculo_rectangular', {
        init: function(p) {
            this._super(p, {
                sensor: true,
                asset: 'obstacle.png',
                duration: 5,
                sentido: true, //A true sentido antihorario, a false sentido horario
                PSIX: 0, //Coordenada x de la esquina superior izquierda del rectangulo
                PSIY: 0, //Coordenada y de la esquina superior izquierda del rectangulo
                PIDX: 0, //Coordenada x de la esquina inferior derecha del rectangulo
                PIDY: 0,  //Coordenada y de la esquina inferior derecha del rectangulo
                initialDuration: 0,
                initialDistance: 0
            });

            this.add('defaultObstacle');

            this.p.hdist = this.p.PIDX - this.p.PSIX;
            this.p.vdist = this.p.PIDY - this.p.PSIY;
            this.p.vel = (2*this.p.hdist + 2*this.p.vdist) / this.p.duration;
            this.p.hdur = this.p.hdist / this.p.vel;
            this.p.vdur = this.p.vdist / this.p.vel;

            if(this.p.x == this.p.PSIX && this.p.y == this.p.PSIY){
            	if(this.p.sentido) this.down();
            	else this.right();
            }else if(this.p.x == this.p.PSIX && this.p.y == this.p.PIDY){
            	if(this.p.sentido) this.right();
            	else this.up();
            }else if(this.p.x == this.p.PIDX && this.p.y == this.p.PIDY){
            	if(this.p.sentido) this.up();
            	else this.left();
            }else if(this.p.x == this.p.PIDX && this.p.y == this.p.PSIY){
            	if(this.p.sentido) this.left();
            	else this.down();
            }
            else if(this.p.x == this.p.PSIX){
            	if(this.p.sentido){
            		this.p.initialDistance = this.p.PIDY - this.p.y;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({y : this.p.PIDY}, this.p.initialDuration, Q.Easing.Linear, {callback: this.right});
            	}else{
            		this.p.initialDistance = this.p.y - this.p.PSIY;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({y : this.p.PSIY}, this.p.initialDuration, Q.Easing.Linear, {callback: this.right});
            	}
            }else if(this.p.y == this.p.PSIY){
            	if(this.p.sentido){
            		this.p.initialDistance = this.p.x - this.p.PSIX;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({x : this.p.PSIX}, this.p.initialDuration, Q.Easing.Linear, {callback: this.down});
            	}else{
            		this.p.initialDistance = this.p.PIDX - this.p.x;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({x : this.p.PIDX}, this.p.initialDuration, Q.Easing.Linear, {callback: this.down});
            	}
            }else if(this.p.x == this.p.PIDX){
            	if(this.p.sentido){
            		this.p.initialDistance = this.p.y - this.p.PSIY;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({y : this.p.PSIY}, this.p.initialDuration, Q.Easing.Linear, {callback: this.left});
            	}else{
            		this.p.initialDistance = this.p.PIDY - this.p.y;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({y : this.p.PIDY}, this.p.initialDuration, Q.Easing.Linear, {callback: this.left});
            	}
            }else if(this.p.y == this.p.PIDY){
            	if(this.p.sentido){
            		this.p.initialDistance = this.p.PIDX - this.p.x;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({x : this.p.PIDX}, this.p.initialDuration, Q.Easing.Linear, {callback: this.up});
            	}else{
            		this.p.initialDistance = this.p.x - this.p.PSIX;
            		this.p.initialDuration = this.p.initialDistance/this.p.vel;
            		this.animate({x : this.p.PSIX}, this.p.initialDuration, Q.Easing.Linear, {callback: this.up});
            	}
            }

        },

        up: function() {
            if (this.p.sentido)
                this.animate({y : this.p.PSIY}, this.p.vdur, Q.Easing.Linear, {callback: this.left});
            else
                this.animate({y : this.p.PSIY}, this.p.vdur, Q.Easing.Linear, {callback: this.right});
        },

        down: function() {
            if (this.p.sentido)
                this.animate({y : this.p.PIDY}, this.p.vdur, Q.Easing.Linear, {callback: this.right});
            else
                this.animate({y : this.p.PIDY}, this.p.vdur, Q.Easing.Linear, {callback: this.left});
        },

        left: function() {
            if (this.p.sentido)
                this.animate({x : this.p.PSIX}, this.p.hdur, Q.Easing.Linear, {callback: this.down});
            else
                this.animate({x : this.p.PSIX}, this.p.hdur, Q.Easing.Linear, {callback: this.up});
        },

        right: function() {
            if (this.p.sentido)
                this.animate({x : this.p.PIDX}, this.p.hdur, Q.Easing.Linear, {callback: this.up});
            else
                this.animate({x : this.p.PIDX}, this.p.hdur, Q.Easing.Linear, {callback: this.down});
        }
    });

    Q.component('myControls', {
        defaults: {
            speed: 200
        },

        added: function() {
            var p = this.entity.p;
            Q._defaults(p,this.defaults);

            this.entity.on("step",this,"step");
        },

        step: function(dt) {
            var p = this.entity.p;

            if(Q.inputs['left']) 
                p.vx = -p.speed;    
            else if(Q.inputs['right'])
                p.vx = p.speed;
            else
              p.vx = 0;

            if(Q.inputs['up'])
                p.vy = -p.speed;
            else if(Q.inputs['down'])  
                p.vy = p.speed;
            else
                p.vy = 0;
        }
    });

    Q.scene('endGame',function(stage) {
        var box = stage.insert(new Q.UI.Container({
            x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
        }));
      
        var button = box.insert(new Q.UI.Button({ x: 10, y: 5, fill: "#CCCCCC",
                                               label: "Play Again" }))         
        var label = box.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
                                            label: "Has ganado" }));
        button.on("click",function() {
            Q.state.set("lifes", 3);
            Q.state.set("godMode", 0);
            Q.clearStages();
            Q.stageScene("creditos_scene");
        });
        box.fit(20);
    });

    Q.UI.Text.extend("Vidas",{
        init: function(p) {
            this._super({
                label: "Vidas: 3",
                x: 0,
                y: 0
            });

            Q.state.on("change.lifes",this,"lifes");
        },

        lifes: function(score) {
           this.p.label = "Vidas: " + score;
        }
    });

    Q.UI.Text.extend("Nivel",{
        init: function(p) {
            this._super({
                label: "Nivel: " + Q.state.get("nivel") + "/7" ,
                x: 305,
                y: 0
            });

            Q.state.on("change.nivel",this,"niveles");
        },

        niveles: function(score) {
           this.p.label = "Nivel: " + Q.state.get("nivel") + "/7";
        }
    });

    Q.UI.Text.extend("Modo_dios",{
        init: function(p) {
            this._super({
                label: "Modo dios: off",
                x: 580,
                y: 0
            });

            Q.state.on("change.godMode",this,"godMode");
        },

        godMode: function(score) {
        	if(score == 1){
        		this.p.label = "Modo dios: on";
        	}else {
        		this.p.label = "Modo dios: off";
        	}
        }
    });

    Q.UI.Text.extend("Creditos",{
        init: function(p) {
            this._super({
                label: "Diseñado y realizado por:" + "\n" + "\n" + "Yamal Al-Mahamid Vélez"+ "\n" + "Javier García Rodríguez",
                color: "white",
                x: Q.width/2,
                y: 150
            });
        }
    });
}
