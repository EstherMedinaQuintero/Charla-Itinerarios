/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a container of cards
 */
class CardContainer {
    constructor() {
        this.cards = [];
    }
    /**
     * @desc Removes a card from the hand
     * @param card - The card to be removed
     */
    popCard() {
        return this.cards.pop();
    }
    /**
     * @desc Adds a card to the hand
     * @param card - The card to be added
     */
    addCard(card) {
        this.cards.push(card);
    }
    /**
     * @desc Gets the number of cards in the hand
     * @returns The number of cards in the hand
     */
    getCardCount() {
        return this.cards.length;
    }
    /**
     * @desc Returns a string representation of the hand
     * @returns A string with the cards in the hand
     */
    toString() {
        return this.cards.map(card => card.toString()).join('\n');
    }
    /**
     * @desc Returns the cards in the hand
     * @returns An array with the cards in the hand
     */
    getCards() {
        return this.cards;
    }
}
export { CardContainer };
