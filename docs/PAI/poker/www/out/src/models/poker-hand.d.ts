import { Hand } from "./hand.js";
declare class PokerHand extends Hand {
    constructor(label?: string);
    hasPair(): boolean;
    hasTwoPair(): boolean;
    hasThreeOfAKind(): boolean;
    hasStraight(): boolean;
    hasFlush(): boolean;
    hasFullHouse(): boolean;
    hasFourOfAKind(): boolean;
    hasStraightFlush(): boolean;
    private hasNOfAKind;
    private getRankCount;
}
export { PokerHand };
