/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a poker hand
 */
import { Hand } from "./hand.js";
import { PokerPlays } from "./poker-plays.js";
class PokerHand extends Hand {
    /**
     * @desc Constructor of the class
     * @param label - Label of the hand
     */
    constructor(label = "Poker Hand") {
        super(label);
        this.handValue = { key: 0, value: 'High Card' };
    }
    getHandValue() {
        return this.handValue.key;
    }
    /**
     * @desc Constructor of the class
     * @param label - Label of the hand
     */
    classify() {
        if (PokerPlays.hasStraightFlush(this.cards)) {
            this.handValue;
        }
        else if (PokerPlays.hasFourOfAKind(this.cards)) {
            this.handValue = { key: 7, value: 'Four of a Kind' };
        }
        else if (PokerPlays.hasFullHouse(this.cards)) {
            this.handValue = { key: 6, value: 'Full House' };
        }
        else if (PokerPlays.hasFlush(this.cards)) {
            this.handValue = { key: 5, value: 'Flush' };
        }
        else if (PokerPlays.hasStraight(this.cards)) {
            this.handValue = { key: 4, value: 'Straight' };
        }
        else if (PokerPlays.hasThreeOfAKind(this.cards)) {
            this.handValue = { key: 3, value: 'Three of a Kind' };
        }
        else if (PokerPlays.hasTwoPair(this.cards)) {
            this.handValue = { key: 2, value: 'Two Pair' };
        }
        else if (PokerPlays.hasPair(this.cards)) {
            this.handValue = { key: 1, value: 'Pair' };
        }
        else {
            this.handValue = { key: 0, value: 'High Card' };
        }
    }
}
export { PokerHand };
