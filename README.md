# I-wanna-die-game


## Diseño del juego

### Descripción y objetivo del juego:
**Me quiero morir!** está inspirado en el juego **World Hardest Game**,
un juego de habilidad que destaca por su dificultad y la frustración que provoca. 
Consiste en varios niveles en los que existen diversos obstáculos móviles con
patrones de movimiento fijos que el jugador deberá esquivar hasta llegar a una meta.
Aparte deberá coger todas las monedas del camino para poder pasar de nivel.
En el momento en el que se colisiona con uno de estos obstáculos el jugador
regresará al punto de partida de ese nivel y se incrementará el número total
de muertes. Ahora bien, en nuestro juego **cada colisión hará que se tenga
que empezar el juego desde el principio** (primer nivel) y no desde el nivel
en el que se ha muerto. Para hacerlo más sencillo el jugador podrá recoger vidas.

### Principales mecánicas:
* Movimiento del jugador:
Nuevo tipo de movimiento que permite al jugador desplazarse en todas las direcciones.
* Recolección de objetos: 
Para obligar al usuario a sortear todos los obstáculos tendrá que recoger monedas y 
vidas esparcidas por el escenario sin las cuales no podrá pasar de nivel.
	* Monedas:
	El jugador debe recoger todas las monedas presentes en el nivel para poder pasar al siguiente.
	* Vidas:
	El jugador puede recogerlas opcionalmente y le permiten volver a empezar por el nivel
en el que se encontraba en caso de chocar con un obstáculo.
* Muerte:
Se produce al colisionar con un obstáculo. Si el jugador tiene alguna vida reaparecerá al 
principio del mismo nivel con una vida menos, si no deberá empezar el juego desde el principio.
* Obstáculos:
Constituyen la mecánica más importante del juego ya que son los que hacen que cada nivel sea
distinto de los demás. Se mueven por el mapa siguiendo diversos patrones y el jugador deberá
esquivarlos para llegar al final.
* Modo dios:
Permite atravesar los obstáculos y así pasar los niveles fácilmente. Está pensado para que
a la hora de evaluar el juego se pueda llegar a todos los niveles con facilidad.


## Diseño de la implementación

Para diseñar la aplicación se ha utilizado como base el motor Quintus y a partir de ello se ha creado
la siguiente arquitectura de clase:

* Player:
El personaje controlado por el jugador. Deberá esquivar los obstáculos, recoger las monedas y llegar
al final de cada nivel.
* Vida:
Es un coleccionoable que el jugador  puede recoger opcionalmente para no tener que empezar desde
el principio del juego cada vez que choque con un obstáculo.
* Moneda:
Es otro tipo de coleccionable, pero en este caso el jugador debe recoger todas las presentes
en el nivel para poder pasar al siguiente.
* Meta:
Se trata de un sensor que marca el final del nivel. Sólo se activará si el jugador ha recogido
previamente todas las monedas presentes en dicho nivel.
* myControls:
Un componente que eimplementa el tipo de movimiento mencionado anteriormente, es decir,
que permite al jugador moverse libremente por el mapa.
* defaultObstacle:
Ya que todos los obstáculos son muy similares entre sí hemos creado un componente que reúne
todos los aspectos en que coinciden. A partir de eso se han creado diferentes tipos de obstáculo:
	* Obstáculo estático: se trata de obstáculos que mantienen su posición.
	* Obstáculo lineal: se mueven en línea recta de manera constante entre dos posiciones.
	* Obstáculo circular: se mueven formando un círculo con su trayectoria.
	* Obstáculo rectangular: a partir de dos puntos que harán el papel de esquinas del rectángulo
	se moveran formando rectángulos con sus trayectorias.
	* Obstáculo camino: obstáculos que van pasando repetidamente por una serie de puntos indicados.
	Tanto el obstáculo lineal como el rectangular podrían ser de este tipo, pero los hemos mantenido
	ya que este se creó después y el uso de los anteriores es más sencillo.


## Equipo de trabajo y reparto de tareas

* Yamal Al-Mahamid Vélez (50%): Diseño y estructura de clases, clase player, creación de sprites,
menú principal, remodelación del HUD (añadiendo el campo nivel), componente "myControls", enemigo estático y lineal
* Javier García Rodríguez (50%): Implementación final de moneda, vida, meta y defaultObstacle como sensores con sus
respectivas funciones, creación del HUD y enemigo circular y rectangular.
* Trabajo conjunto: gran parte del trabajo se hizo entre ambos miembros del equipo, como la creación del obstáculo
camino, el final del juego y lo que realmente conllevó más trabajo que es el diseño y la prueba de los distintos
niveles para comprobar que todos se podían pasar sin dejar de ser difíciles, que la dificultad se fuera incrementando
y hacer los cambios necesarios para que la experiencia de juego fuera la mejor posible.

El equipo funcionó muy bien, el reparto de trabajo fue muy bueno y hubo mucha colaboración entre los miembros que lo formaban.


## Fuentes y referencias

Como fuente principal se ha utilizado la [página oficial de Quintus](http://www.html5quintus.com/).
