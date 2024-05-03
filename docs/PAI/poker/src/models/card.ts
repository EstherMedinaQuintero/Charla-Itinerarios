/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Generic class to represent a card
 */

class Card {
  private rank: string = '2';
  private suit: string = 'Clubs';
  private imagePath: string = 'img/2C.png';

  /**
   * @desc Constructor of the class
   * @param rank - From 2 to 10, J, Q, K, A
   * @param suit - Hearts, Diamonds, Clubs, Spades
   */
  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
    this.imagePath = `img/${rank}${suit.charAt(0)}.png`;
  }

  /**
   * @desc Returns a string representation of the card
   * @returns A string with the rank and suit of the card
   */
  public toString(): string {
    const SPECIAL_RANKS = { 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace' };
    const RANK = SPECIAL_RANKS.hasOwnProperty(this.rank) ? SPECIAL_RANKS[this.rank as keyof typeof SPECIAL_RANKS] : this.rank;
    return `${RANK} of ${this.suit}`;
  }

  /**
   * @desc Returns the path of the image of the card
   * @returns A string with the path of the image
   */
  public getImagePath(): string {
    return this.imagePath;
  }

  /**
   * @desc Returns the rank of the card
   * @returns A string with the rank of the card
   */
  public getRank(): string {
    return this.rank;
  }

  /**
   * @desc Returns the suit of the card
   * @returns A string with the suit of the card
   */
  public getSuit(): string {
    return this.suit;
  }

  /**
   * @desc Compares two cards '=='
   * @returns True if the cards are the same, false otherwise
   */
  public equals(card: Card): boolean {
    return this.rank === card.getRank() && this.suit === card.getSuit();
  }

  /**
   * @desc Compares two cards '<'
   * @returns True if the card is less than the other, false otherwise
   * @details Clubs < Diamonds < Hearts < Spades
   */
  public lessThan(card: Card): boolean {
    const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    if (RANKS.indexOf(this.rank) < RANKS.indexOf(card.getRank())) {
      return true;
    } else if (RANKS.indexOf(this.rank) === RANKS.indexOf(card.getRank())) {
      if (SUITS.indexOf(this.suit) < SUITS.indexOf(card.getSuit())) {
        return true;
      }
    }
    return false;
  }

  /**
   * @desc Compares two cards '>'
   * @returns True if the card is greater than the other, false otherwise
   * @details Clubs < Diamonds < Hearts < Spades
   */
  public greaterThan(card: Card): boolean {
    return !this.equals(card) && !this.lessThan(card);
  }
}

export { Card };