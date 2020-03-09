


# Tic tac toe - React Native
## Índice

*  [1. Preámbulo](#1-preámbulo)

*  [2. Usuario Objetivo](#2-usuario-objetivo)

*  [3. Decisiones de Diseño](#3-decisiones-de-diseño)

*  [4. Checklist](#9-checklist)


## 1. Preámbulo
El **tres en línea**, también conocido como, **Gato** (en Chile, Costa Rica _y_ México), **Tic-Tac-Toe** (en Estados Unidos), o **la vieja** (en Venezuela). Originalmente es un juego de lápiz y papel entre dos jugadores: O y X, que marcan los espacios de un tablero de 3×3 alternadamente. En esta ocación vamos a construir este juego para tablets y celular

Para construir el juego vamos a usar [React Native](https://facebook.github.io/react-native/), que nos permite construir aplicaciones _nativas_ (que no _híbridas_) que se puedan instalar y ejecutar en dispositivos Android e iOS, y todo ello usando JavaScript y React para componer nuestra interfaz. Además se trabajará con **Context Api** y los hooks **useReducer** y **useContext**

## 2. Usuario objetivo:
  Nuestro público objetivo en este caso
   son niños en edad pre-escolar, 
   así que el juego debe ser simple, intuitivo, con botones grandes, 
   poco o nada de texto ...
## 3. Decisiones de Diseño:
En este caso he decidido cambiar los token 'X' y 'O' por espadas y escudos. Con esto en consideración, los colores a usar se escogieron en base a los colores que utilizaba la realeza en la edad medieval
![colores](https://i.ibb.co/b7XhXWd/colores.png)

####  Producto Final
![Producto Final](https://i.ibb.co/t3QKGgv/Screenshot-20200309-020322.jpg](https://i.ibb.co/t3QKGgv/Screenshot-20200309-020322.jpg))

## 4. Checklist


* [x] Muestra grilla (grid) de 3x3

* [x] Muestra jugador al que le toca su turno

* [x] Permite marcar cajita vacía

* [x] Cambia el turno después de marcar cajita

* [x] No permite marcar cajita ya marcada

* [x] Permite reiniciar la partida

* [x] Detecta jugadas ganadoras en eje x

* [x] Detecta jugadas ganadoras en eje y

* [x] Detecta jugadas ganadoras en diagonales

* [x] Muestra jugador ganador cuando gana

* [ ] Muestra jugada ganadora cuando hay ganador

* [x] Muestra empate cuando nadie gana y no quedan cajitas que marcar

* [x] Permire volver a empezar cuando termina una partida (alguien ganó o empate)