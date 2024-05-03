## Poker Game

- Programación de aplicaciones interactivas
- Esther M. Quintero
- alu0101434780@ull.edu.es

## Estructura general del proyecto

El proyecto consta de varias clases diseñadas para representar y manipular una baraja de cartas, incluyendo la lógica para diferentes juegos de cartas como el póker. Las principales clases y sus funcionalidades son:

* Card: Representa una carta genérica con rangos desde 2 a 10, J, Q, K, A y los palos Corazones, Diamantes, Tréboles y Espadas. Incluye métodos para obtener la representación en cadena, el camino de la imagen, y comparaciones entre cartas.     

```ts
class Card {
  private rank: string = '2';
  private suit: string = 'Clubs';
  private imagePath: string = 'img/2C.png';

  public toString()
  public getImagePath()
  public getRank()
  public getSuit()
  public equals(card: Card)
  public lessThan(card: Card)
  public greaterThan(card: Card)
}
```

* CardContainer: Una clase abstracta que maneja un conjunto de cartas. Proporciona métodos para añadir, quitar y contar cartas.   

```ts
class CardContainer {
  protected cards: Card[] = [];

  public popCard()
  public addCard(card: Card)
  public getCardCount()
  public toString()
  public getCards()
}
```

* Deck: Extiende de CardContainer y representa una baraja de 52 cartas. Incluye funcionalidades para crear la baraja, barajar y ordenar las cartas, y métodos para tratar con manos de cartas en juegos.  

```ts
class Deck extends CardContainer {
  private createDeck()
  public shuffle()
  public sort()
  public dealHand(numberOfCards: number, numberOfHands: number)
  public moveCardsToHand(numberOfCards: number, hand: PokerHand)
  public removeCard(card: Card)
}
```

* Hand: También una extensión de CardContainer, específicamente diseñada para representar la mano de un jugador.    

```ts
class Hand extends CardContainer {
  private label: string;

  public getLabel()
}
```

* PokerHand: Extiende de Hand e implementa reglas específicas del póker, como detectar parejas, tríos, escaleras, etc.  

```ts
class PokerHand extends Hand {
  public hasPair()
  public hasTwoPair()
  public hasThreeOfAKind()
  public hasStraight()
  public hasFlush()
  public hasFullHouse()
  public hasFourOfAKind()
  public hasStraightFlush()
  private getCardCountMap()
  private hasNumberOfAKind(num: number)
  public getHighestCard()
}
```

* Player: Representa un jugador dentro del juego. Mantiene una mano de cartas y proporciona métodos para interactuar con su mano.   

```ts
class Player {
  private name: string;
  private hand: PokerHand = new PokerHand();

  public getName()
  public getHand()
  public setHand(hand: PokerHand)
  public addCardToHand(card: Card)
  public toString()
}
```

* GameController: Controla la lógica del juego, como añadir o remover jugadores, y determinar el ganador del juego basado en las manos de póker.    

```ts
class GameController {
  private players: Player[];

  public addPlayer(player: Player)
  public removePlayer(player: Player)
  public getPlayers()
  public determineWinner()
  private compareHands(hand1: PokerHand, hand2: PokerHand)
}
```

* PokerGame: Clase principal que coordina los componentes del juego, como la baraja, los jugadores y el controlador del juego, gestionando el flujo del juego y las interacciones.

```ts
class PokerGame {
  private deck: Deck;
  private gameController: GameController;
  private numOfPlayers: number;
  private numOfCards: number;
  private buttonView: ButtonView;

  public dealCards()
  public showWinner()
  public resetGame()
  public getDeck()
}
```