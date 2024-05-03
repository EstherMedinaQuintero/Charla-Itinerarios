declare class CardView {
    private card;
    private element;
    constructor(card: any, container: HTMLElement);
    updateCardView(): void;
    setCard(card: any): void;
}
export { CardView };
