/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a hand view
 */

import { CardView } from "./card-view.js";
import { Hand } from "../models/hand.js";

class HandView {
  private hand: Hand;
  private container: HTMLElement;
  private cardViews: CardView[] = [];

  /**
   * @desc Create a HandView object with the given hand and container
   * @param hand Hand object
   * @param container Container to append the hand view
   */
  constructor(hand: Hand, container: HTMLElement) {
    this.hand = hand;
    this.container = container;
    this.container.classList.add('hand-container');
    this.render();
  }

  /**
   * @desc Renders the hand view
   */
  public render(): void {
    this.container.innerHTML = '';
    this.hand.getCards().forEach(card => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
      this.container.appendChild(cardContainer);
      const cardView = new CardView(card, cardContainer);
      this.cardViews.push(cardView);
    });
  }

  /**
   * @desc Update the hand view with the new hand
   * @param newHand New hand object
   */
  public updateHand(newHand: Hand): void {
    this.hand = newHand;
    this.render();
  }
}

export { HandView };
