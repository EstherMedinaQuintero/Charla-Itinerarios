/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a card view
 */
class CardView {
    /**
     * @desc Create a CardView object with the given card and container
     * @param card Card object
     * @param container Container to append the card view
     */
    constructor(card, container) {
        this.card = card;
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.updateCardView();
        container.appendChild(this.element);
    }
    /**
     * @desc Updates the card view with the current card
     */
    updateCardView() {
        this.element.innerHTML = `<div class="card-content">
                                  <img src="${this.card.getImagePath()}" alt="${this.card.getRank()} of ${this.card.getSuit()}">
                                  <div class="card-text">${this.card.getRank()} of ${this.card.getSuit()}</div>
                              </div>`;
    }
    /**
     * @desc Set the card to display
     * @param card Card object
     */
    setCard(card) {
        this.card = card;
        this.updateCardView();
    }
}
export { CardView };
