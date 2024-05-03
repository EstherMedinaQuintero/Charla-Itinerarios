/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a poker play
 */

import { Card } from "./card.js";

class PokerPlays {
  /**
   * @desc Tells if the hand has a pair (two cards of the same value)
   * @returns True if the hand has it, false otherwise
   */
  public static hasPair(hand: Card[]): boolean {
    return PokerPlays.hasNumberOfAKind(hand, 2);
  }

  /**
   * @desc Tells if the hand has two pairs
   * @returns True if the hand has it, false otherwise
   */
  public static hasTwoPair(hand: Card[]): boolean {
    let ranks = PokerPlays.getCardCountMap(hand);
    let pairs = 0;
    for (const count of Object.values(ranks)) {
      if (count === 2) pairs++;
    }
    return pairs === 2;
  }

  /**
   * @desc Tells if the hand has three cards with the same value
   * @returns True if the hand has it, false otherwise
   */
  public static hasThreeOfAKind(hand: Card[]): boolean {
    return PokerPlays.hasNumberOfAKind(hand, 3);
  }

  /**
   * @desc Tells if the hand has five cards with consecutive values
   * @details Queen-King-Ace-2-3 is not a valid straight
   * @details A-2-3-4-5 is a valid move
   * @returns True if the hand has it, false otherwise
   */
  public static hasStraight(hand: Card[]): boolean {
    if (hand.length < 5) return false;
      let ranks = hand.map(card => {
      let rankValue = card.getRank();
      let rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      return rankOrder.indexOf(rankValue);
    }).sort((a, b) => a - b);
    if (ranks.includes(12)) {
      ranks.push(-1); 
    }
    ranks.sort((a, b) => a - b);
    let uniqueRanks = [...new Set(ranks)];
    let consecutiveCount = 1;
    for (let actual = 1; actual < uniqueRanks.length; actual++) {
      if (uniqueRanks[actual] === uniqueRanks[actual - 1] + 1) {
        consecutiveCount++;
        if (consecutiveCount === 5) {
          return true; 
        }
      } else {
        consecutiveCount = 1;  
      }
    }
    return false;
  }
  
  /**
   * @desc Tells if the hand has five cards of the same suit
   * @returns True if the hand has it, false otherwise
   */
  public static hasFlush(hand: Card[]): boolean {
    let suits = hand.reduce<Record<string, number>>((acumulator, card) => {
      let suit = card.getSuit();
      acumulator[suit] = (acumulator[suit] || 0) + 1;
      return acumulator;
    }, {});
  
    return Object.values(suits).some(count => count >= 5);
  }

  /**
   * @desc Tells if the hand has three cards with the same value and two cards with another same value
   * @returns True if the hand has it, false otherwise
   */
  public static hasFullHouse(hand: Card[]): boolean {
    let ranks = PokerPlays.getCardCountMap(hand);
    let three = false;
    let two = false;
    for (const count of Object.values(ranks)) {
      if (count === 3) three = true;
      if (count === 2) two = true;
    }
    return three && two;
  }

  /**
   * @desc Tells if the hand has four cards with the same value
   * @returns True if the hand has it, false otherwise
   */
  public static hasFourOfAKind(hand: Card[]): boolean {
    return PokerPlays.hasNumberOfAKind(hand, 4);
  }

  /**
   * @desc Tells if the hand has five cards with consecutive values of the same suit
   * @returns True if the hand has it, false otherwise
   */
  public static hasStraightFlush(hand: Card[]): boolean {
    return PokerPlays.hasStraight(hand) && PokerPlays.hasFlush(hand);
  }

  private static getCardCountMap(hand: Card[]): Record<string, number> {
    return hand.reduce<Record<string, number>>((acumulator, card) => {
      let rank = card.getRank();
      acumulator[rank] = (acumulator[rank] || 0) + 1;
      return acumulator;
    }, {});
  }

  /**
   * @desc Tells if the hand has num cards with the same value
   * @param num - Number of cards with the same value
   * @returns True if the hand has it, false otherwise
   */
  private static hasNumberOfAKind(hand: Card[], num: number): boolean {
    let ranks = PokerPlays.getCardCountMap(hand);
    return Object.values(ranks).some(count => count === num);
  }

  /**
   * @desc Returns the highest card of the hand
   * @param hand - Hand to get the highest card from
   * @returns Highest card of the hand
   */
  public static getHighestCard(hand: Card[]): Card {
    hand.sort((card1, card2) => {
      const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
      const rankDifference = RANKS.indexOf(card2.getRank()) - RANKS.indexOf(card1.getRank());
      if (rankDifference !== 0) return rankDifference;
      return SUITS.indexOf(card2.getSuit()) - SUITS.indexOf(card1.getSuit());
    });
    return hand[hand.length - 1]; 
  }
}

export { PokerPlays };