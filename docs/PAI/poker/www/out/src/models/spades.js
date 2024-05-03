/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Classes to represent the spades cards
 * @details It simplifies the creation of the cards of the spades suit
 */
import { Card } from './card.js';
class SpadeCard extends Card {
    /**
     * @desc Constructor of the class
     * @param rank - From 2 to 10, J, Q, K, A
     */
    constructor(rank) {
        super(rank, 'Spades');
    }
}
export { SpadeCard };
