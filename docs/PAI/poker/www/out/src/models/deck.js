/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a deck of cards
 */
import { DiamondCard } from "./diamonds.js";
import { ClubCard } from "./clubs.js";
import { HeartCard } from "./hearts.js";
import { SpadeCard } from "./spades.js";
import { CardContainer } from "./card-container.js";
import { PokerHand } from "./poker-hand.js";
class Deck extends CardContainer {
    /**
     * @desc Constructor of the class
     * @details It creates a deck of 52 cards
     */
    constructor() {
        super();
        this.createDeck();
    }
    /**
     * @desc Creates a deck of 52 cards
     * @see https://en.wikipedia.org/wiki/Standard_52-card_deck
     */
    createDeck() {
        const SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
        const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of SUITS) {
            for (let rank of RANKS) {
                switch (suit) {
                    case 'Diamonds':
                        this.cards.push(new DiamondCard(rank));
                        break;
                    case 'Clubs':
                        this.cards.push(new ClubCard(rank));
                        break;
                    case 'Hearts':
                        this.cards.push(new HeartCard(rank));
                        break;
                    case 'Spades':
                        this.cards.push(new SpadeCard(rank));
                        break;
                }
            }
        }
    }
    /**
     * @desc Shuffles the deck of cards
     * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    shuffle() {
        for (let currentIndex = this.cards.length - 1; currentIndex > 0; currentIndex--) {
            let randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
    /**
     * @desc Sorts the deck of cards
     * @details Methods in Card: equals, lessThan, greaterThan
     */
    sort() {
        this.cards.sort((card1, card2) => {
            if (card1.lessThan(card2)) {
                return -1;
            }
            else if (card1.greaterThan(card2)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    /**
     * @desc Deals a number of cards from the deck
     * @param numberOfCards - Number of cards to deal
     * @param numberOfHands - Number of hands to deal the cards
     * @returns An array with the dealt cards
     */
    dealHands(numberOfCards, numberOfHands) {
        if (this.cards.length < numberOfCards * numberOfHands) {
            throw new Error("Not enough cards in the deck to deal " + numberOfCards + " cards to " + numberOfHands + " hands.");
        }
        let hands = [];
        for (let i = 0; i < numberOfHands; i++) {
            let hand = new PokerHand(`Player ${i + 1} Hand`);
            for (let j = 0; j < numberOfCards; j++) {
                hand.addCard(this.popCard());
            }
            hands.push(hand);
        }
        return hands;
    }
    /**
     * @desc It moves a number of cards to a hand
     * @param numberOfCards - Number of cards to move
     * @param hand - Hand to move the cards to
     */
    moveCardsToHand(numberOfCards, hand) {
        for (let cardIndex = 0; cardIndex < numberOfCards; cardIndex++) {
            hand.addCard(this.popCard());
        }
    }
    /**
     * @desc It removes certain card from the deck
     * @param card - Card to remove
     */
    removeCard(card) {
        const cardIndex = this.cards.indexOf(card);
        if (cardIndex > -1) {
            this.cards.splice(cardIndex, 1);
        }
        else {
            throw new Error("The card is not in the deck.");
        }
    }
}
export { Deck };
