/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Tests to check the Deck class
 */

import { Deck } from "../models/deck.js";

function main() {
  try {
    const deck = new Deck();
    console.log("Mazo creado con éxito.");
    console.log(`Total de cartas en el mazo inicial: ${deck.getCardCount()}`);
    console.log(`Cartas en el mazo inicial: \n${deck.toString()}`);

    // Mezclar el mazo
    deck.shuffle();
    console.log("Mazo mezclado.");

    // Repartir cartas
    const HANDS = deck.dealHands(5, 2);
    console.log("Cartas repartidas a las manos:");
    HANDS.forEach(hand => {
      console.log(`${hand.getLabel()}: \n${hand.toString()}`);
    });

    // Ordenar el mazo
    deck.sort();
    console.log("Mazo ordenado.");

    // Mostramos cuántas cartas quedan
    console.log(`Total de cartas en el mazo final: ${deck.getCardCount()}`);

  } catch (error) {
    console.error(error);
  }
}

main();
