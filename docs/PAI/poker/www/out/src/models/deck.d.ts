declare class Deck {
    private cards;
    constructor();
    shuffle(): void;
    popCard(): any;
    addCard(card: any): void;
    getCardCount(): number;
}
export { Deck };
