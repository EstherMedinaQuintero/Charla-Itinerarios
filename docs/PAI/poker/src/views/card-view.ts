/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a card view
 */

import { Card } from "../models/card.js";

class CardView {
  private card: Card;  
  private element: HTMLElement;

  /**
   * @desc Create a CardView object with the given card and container
   * @param card Card object
   * @param container Container to append the card view
   */
  constructor(card: Card, container: HTMLElement) {
    this.card = card;
    this.element = document.createElement('div');
    this.element.classList.add('card');
    this.updateCardView();
    container.appendChild(this.element);
  }

  /**
   * @desc Updates the card view with the current card
   */
  public updateCardView(): void {
    this.element.innerHTML = `<div class="card-content">
                                  <img src="${this.card.getImagePath()}" alt="${this.card.getRank()} of ${this.card.getSuit()}">
                                  <div class="card-text">${this.card.getRank()} of ${this.card.getSuit()}</div>
                              </div>`;
  }

  /**
   * @desc Set the card to display
   * @param card Card object
   */
  public setCard(card: Card): void {
    this.card = card;
    this.updateCardView();
  }
}

export { CardView };
