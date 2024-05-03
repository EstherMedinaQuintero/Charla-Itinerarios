import { PokerHand } from "./poker-hand.js";
import { Card } from "./card.js";

class Player {
  private name: string;
  private hand: PokerHand = new PokerHand();

  /**
   * @desc Constructor de la clase Player.
   * @param name - El nombre del jugador.
   * @param hand - La mano de póker inicial del jugador, si se tiene alguna.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * @desc Retorna el nombre del jugador.
   * @returns El nombre del jugador.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * @desc Retorna la mano de póker del jugador.
   * @returns La mano de póker del jugador.
   */
  public getHand(): PokerHand {
    return this.hand;
  }

  /**
   * @desc Asigna una nueva mano de póker al jugador.
   * @param hand - La nueva mano de póker.
   */
  public setHand(hand: PokerHand): void {
    this.hand = hand;
  }

  /**
   * @desc Añade una carta a la mano del jugador.
   * @param card - La carta a añadir.
   */
  public addCardToHand(card: Card): void {
    this.hand.addCard(card);
  }

  /**
   * @desc Genera una representación en string del jugador, mostrando su nombre y su mano.
   * @returns Una representación en string del jugador.
   */
  public toString(): string {
    return `${this.name}: ${this.hand.toString()}`;
  }
}

export { Player };
