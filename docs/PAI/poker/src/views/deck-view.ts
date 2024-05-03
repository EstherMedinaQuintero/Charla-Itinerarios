/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a deck view
 */

import { Deck } from "../models/deck.js";

class DeckView {
  private container: HTMLElement;
  private cardBackImage: string = './img/purple_back.png';

  /**
   * @desc Create a DeckView object with the given deck, container and card back image
   * @param deck Deck object
   * @param container Container to append the deck view
   * @param cardBackImage Image path for the card back
   */
  constructor(deck: Deck, container: HTMLElement) {
    this.container = container;
    this.container.classList.add('deck-container');
    this.render(deck);
  }

  /**
   * @desc Renders the deck view
   */
  public render(deck: Deck): void {
    this.container.innerHTML = '';
    let cardCount = deck.getCardCount();
    let deckElement = document.createElement('div');
    deckElement.classList.add('deck');
    if (cardCount > 0) {
        deckElement.innerHTML = `<img src="${this.cardBackImage}" alt="Card Back">`;
        deckElement.appendChild(this.createCardCountElement(cardCount));
    } else {
        deckElement.textContent = 'No cards left';
    }
    this.container.appendChild(deckElement);
  }

  /**
   * @desc Create a card count element with the given count
   * @param count Number of cards left in the deck
   * @returns Card count element
   */
  public createCardCountElement(count: number): HTMLElement {
    let countElement = document.createElement('div');
    countElement.classList.add('card-count');
    countElement.textContent = `Cards left: ${count}`;
    return countElement;
  }

  /**
   * @desc Updates the deck view with the new deck
   * @param newDeck New deck object
   */
  public updateDeck(newDeck: Deck): void {
    this.render(newDeck);
  }
}

export { DeckView };
