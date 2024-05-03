/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Classes to represent the clubs cards
 * @details It simplifies the creation of the cards of the clubs suit
 */
import { Card } from './card.js';
class ClubCard extends Card {
    /**
     * @desc Constructor of the class
     * @param rank - From 2 to 10, J, Q, K, A
     */
    constructor(rank) {
        super(rank, 'Clubs');
    }
}
export { ClubCard };
