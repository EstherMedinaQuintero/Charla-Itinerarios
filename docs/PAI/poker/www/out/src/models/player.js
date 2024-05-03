import { PokerHand } from "./poker-hand.js";
class Player {
    /**
     * @desc Constructor de la clase Player.
     * @param name - El nombre del jugador.
     * @param hand - La mano de póker inicial del jugador, si se tiene alguna.
     */
    constructor(name) {
        this.hand = new PokerHand();
        this.name = name;
    }
    /**
     * @desc Retorna el nombre del jugador.
     * @returns El nombre del jugador.
     */
    getName() {
        return this.name;
    }
    /**
     * @desc Retorna la mano de póker del jugador.
     * @returns La mano de póker del jugador.
     */
    getHand() {
        return this.hand;
    }
    /**
     * @desc Asigna una nueva mano de póker al jugador.
     * @param hand - La nueva mano de póker.
     */
    setHand(hand) {
        this.hand = hand;
    }
    /**
     * @desc Añade una carta a la mano del jugador.
     * @param card - La carta a añadir.
     */
    addCardToHand(card) {
        this.hand.addCard(card);
    }
    /**
     * @desc Genera una representación en string del jugador, mostrando su nombre y su mano.
     * @returns Una representación en string del jugador.
     */
    toString() {
        return `${this.name}: ${this.hand.toString()}`;
    }
}
export { Player };
