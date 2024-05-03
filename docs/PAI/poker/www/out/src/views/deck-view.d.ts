import { Deck } from "../models/deck.js";
declare class DeckView {
    private deck;
    private container;
    private cardBackImage;
    constructor(deck: Deck, container: HTMLElement, cardBackImage: string);
    render(): void;
    createCardCountElement(count: number): HTMLElement;
    updateDeck(newDeck: Deck): void;
}
export { DeckView };
