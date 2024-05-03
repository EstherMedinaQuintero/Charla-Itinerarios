declare class GameController {
    private deck;
    private playerHand;
    private dealerHand;
    private deckView;
    private playerHandView;
    private dealerHandView;
    constructor(deckViewContainer: HTMLElement, playerHandContainer: HTMLElement, dealerHandContainer: HTMLElement, cardBackImage: string);
    dealCards(): void;
    reshuffleDeck(): void;
}
export { GameController };
