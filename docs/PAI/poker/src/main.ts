/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Main program
 */

import { PokerGame } from "./poker-game.js";

function main() {
  let numOfPlayers = 2;
  let numOfCards = 5;
  const GAME = new PokerGame(numOfPlayers, numOfCards);
}

main();