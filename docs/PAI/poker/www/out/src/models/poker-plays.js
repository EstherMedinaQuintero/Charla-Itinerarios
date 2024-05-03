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
class PokerPlays {
    /**
     * @desc Tells if the hand has a pair (two cards of the same value)
     * @returns True if the hand has it, false otherwise
     */
    static hasPair(hand) {
        return PokerPlays.hasNumberOfAKind(hand, 2);
    }
    /**
     * @desc Tells if the hand has two pairs
     * @returns True if the hand has it, false otherwise
     */
    static hasTwoPair(hand) {
        let ranks = PokerPlays.getCardCountMap(hand);
        let pairs = 0;
        for (const count of Object.values(ranks)) {
            if (count === 2)
                pairs++;
        }
        return pairs === 2;
    }
    /**
     * @desc Tells if the hand has three cards with the same value
     * @returns True if the hand has it, false otherwise
     */
    static hasThreeOfAKind(hand) {
        return PokerPlays.hasNumberOfAKind(hand, 3);
    }
    /**
     * @desc Tells if the hand has five cards with consecutive values
     * @details Queen-King-Ace-2-3 is not a valid straight
     * @details A-2-3-4-5 is a valid move
     * @returns True if the hand has it, false otherwise
     */
    static hasStraight(hand) {
        if (hand.length < 5)
            return false;
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
            }
            else {
                consecutiveCount = 1;
            }
        }
        return false;
    }
    /**
     * @desc Tells if the hand has five cards of the same suit
     * @returns True if the hand has it, false otherwise
     */
    static hasFlush(hand) {
        let suits = hand.reduce((acumulator, card) => {
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
    static hasFullHouse(hand) {
        let ranks = PokerPlays.getCardCountMap(hand);
        let three = false;
        let two = false;
        for (const count of Object.values(ranks)) {
            if (count === 3)
                three = true;
            if (count === 2)
                two = true;
        }
        return three && two;
    }
    /**
     * @desc Tells if the hand has four cards with the same value
     * @returns True if the hand has it, false otherwise
     */
    static hasFourOfAKind(hand) {
        return PokerPlays.hasNumberOfAKind(hand, 4);
    }
    /**
     * @desc Tells if the hand has five cards with consecutive values of the same suit
     * @returns True if the hand has it, false otherwise
     */
    static hasStraightFlush(hand) {
        return PokerPlays.hasStraight(hand) && PokerPlays.hasFlush(hand);
    }
    static getCardCountMap(hand) {
        return hand.reduce((acumulator, card) => {
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
    static hasNumberOfAKind(hand, num) {
        let ranks = PokerPlays.getCardCountMap(hand);
        return Object.values(ranks).some(count => count === num);
    }
    /**
     * @desc Returns the highest card of the hand
     * @param hand - Hand to get the highest card from
     * @returns Highest card of the hand
     */
    static getHighestCard(hand) {
        hand.sort((card1, card2) => {
            const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
            const rankDifference = RANKS.indexOf(card2.getRank()) - RANKS.indexOf(card1.getRank());
            if (rankDifference !== 0)
                return rankDifference;
            return SUITS.indexOf(card2.getSuit()) - SUITS.indexOf(card1.getSuit());
        });
        return hand[hand.length - 1];
    }
}
export { PokerPlays };
