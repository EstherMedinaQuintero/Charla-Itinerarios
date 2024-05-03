/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a container of cards
 */

import { Card } from "./card.js";

class CardContainer {
  protected cards: Card[] = [];

  /**
   * @desc Removes a card from the hand
   * @param card - The card to be removed
   */
  public popCard(): Card | undefined {
    return this.cards.pop();
  }

  /**
   * @desc Adds a card to the hand
   * @param card - The card to be added
   */
  public addCard(card: Card): void {
    this.cards.push(card);
  }

  /**
   * @desc Gets the number of cards in the hand
   * @returns The number of cards in the hand
   */
  public getCardCount(): number {
    return this.cards.length;
  }

  /**
   * @desc Returns a string representation of the hand
   * @returns A string with the cards in the hand
   */
  public toString(): string {
    return this.cards.map(card => card.toString()).join('\n');
  }

  /**
   * @desc Returns the cards in the hand
   * @returns An array with the cards in the hand
   */
  public getCards(): Card[] {
    return this.cards;
  }
}

export { CardContainer };