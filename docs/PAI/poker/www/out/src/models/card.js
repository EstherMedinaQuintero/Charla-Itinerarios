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
    /**
     * @desc Constructor of the class
     * @param rank - From 2 to 10, J, Q, K, A
     * @param suit - Hearts, Diamonds, Clubs, Spades
     */
    constructor(rank, suit) {
        this.rank = '2';
        this.suit = 'Clubs';
        this.imagePath = 'img/2C.png';
        this.rank = rank;
        this.suit = suit;
        this.imagePath = `img/${rank}${suit.charAt(0)}.png`;
    }
    /**
     * @desc Returns a string representation of the card
     * @returns A string with the rank and suit of the card
     */
    toString() {
        const SPECIAL_RANKS = { 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace' };
        const RANK = SPECIAL_RANKS.hasOwnProperty(this.rank) ? SPECIAL_RANKS[this.rank] : this.rank;
        return `${RANK} of ${this.suit}`;
    }
    /**
     * @desc Returns the path of the image of the card
     * @returns A string with the path of the image
     */
    getImagePath() {
        return this.imagePath;
    }
    /**
     * @desc Returns the rank of the card
     * @returns A string with the rank of the card
     */
    getRank() {
        return this.rank;
    }
    /**
     * @desc Returns the suit of the card
     * @returns A string with the suit of the card
     */
    getSuit() {
        return this.suit;
    }
    /**
     * @desc Compares two cards '=='
     * @returns True if the cards are the same, false otherwise
     */
    equals(card) {
        return this.rank === card.getRank() && this.suit === card.getSuit();
    }
    /**
     * @desc Compares two cards '<'
     * @returns True if the card is less than the other, false otherwise
     * @details Clubs < Diamonds < Hearts < Spades
     */
    lessThan(card) {
        const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        if (RANKS.indexOf(this.rank) < RANKS.indexOf(card.getRank())) {
            return true;
        }
        else if (RANKS.indexOf(this.rank) === RANKS.indexOf(card.getRank())) {
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
    greaterThan(card) {
        return !this.equals(card) && !this.lessThan(card);
    }
}
export { Card };
