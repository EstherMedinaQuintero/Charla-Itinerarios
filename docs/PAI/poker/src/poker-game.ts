/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to control the buttons of the game
 */

import { Deck } from './models/deck.js';
import { GameController } from './controllers/game-controller.js';
import { ButtonController } from './controllers/button-controller.js';
import { PokerHand } from './models/poker-hand.js';

class PokerGame {
  private deck: Deck;
  private gameController: GameController;
  private numOfPlayers: number;
  private numOfCards: number;
  private buttonController: ButtonController;

  /**
   * @desc Constructor of the class
   * @param numOfPlayers - Number of players
   * @param deckContainerId - Id of the container of the deck
   */
  constructor(numOfPlayers: number = 2, numOfCards: number = 5) {
    this.deck = new Deck();
    this.deck.shuffle();
    this.numOfPlayers = numOfPlayers;
    this.numOfCards = numOfCards;
    this.gameController = new GameController(numOfPlayers);
    this.buttonController = new ButtonController(this, 'deckContainer', 'playersContainer');
  }

  /**
   * @desc Deals cards to the players
   * @returns Hands dealt to the players
   */
  public dealCards(): PokerHand[] {
    const cardsNeeded = this.numOfCards * this.numOfPlayers;
    if (this.deck.getCardCount() >= cardsNeeded) {
      const hands = this.deck.dealHands(this.numOfCards, this.numOfPlayers);
      this.gameController.getPlayers().forEach((player, index) => {
        player.setHand(hands[index]);
      });
      return hands;
    } else {
      throw new Error("Not enough cards in the deck to deal.");
    }
  }

  public dealCardsToPlayer(playerIndex: number): PokerHand {
    const cardsNeeded = this.numOfCards;
    if (this.deck.getCardCount() >= cardsNeeded) {
      const hand = this.deck.dealHands(this.numOfCards, 1);
      this.gameController.getPlayers()[playerIndex].setHand(hand[0]);
      return hand[0];
    } else {
      throw new Error("Not enough cards in the deck to deal.");
    }
  }

  /**
   * @desc Shows the winner of the game
   * @returns The winner of the game
   */
  public showWinner(): string {
    const winner = this.gameController.determineWinner();
    return winner ? `The winner is ${winner.getName()}!` : "No winner determined.";
  }

  /**
   * @desc Resets the game by creating a new deck and shuffling it
   */
  public resetGame(): void {
    this.deck = new Deck();
    this.deck.shuffle();
  }

  /**
   * @desc Returns the deck
   * @returns The deck
   */
  public getDeck(): Deck {
    return this.deck;
  }
}

export { PokerGame };
