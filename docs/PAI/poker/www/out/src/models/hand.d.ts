declare class Hand {
    private cards;
    private label;
    constructor(label?: string);
    addCard(card: any): void;
    popCard(): any;
    getCardCount(): number;
    toString(): string;
    getLabel(): string;
    getCards(): any[];
}
export { Hand };
