/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to control the game
 */

import { PokerHand } from "../models/poker-hand.js";
import { Player } from "../models/player.js";
import { PokerPlays } from "../models/poker-plays.js";

class GameController {
  private players: Player[];

  /**
   * @desc Constructor of the class.
   * @param numOfPlayers - Number of players.
   */
  constructor(numOfPlayers: number) {
    this.players = [];
    for (let i = 0; i < numOfPlayers; i++) {
      this.players.push(new Player(`Player ${i + 1}`));
    }
    this.prepareTable();
  }

  /**
   * @desc Prepares the table
   * @details It prepares the player space
   * @details It divides the viewpoint into two parts and gives them different colors
   */
  private prepareTable(): void {
    let playersContainer = document.getElementById('playersContainer') || document.createElement('div');
    playersContainer.innerHTML = ''; // Limpiar cualquier contenido existente
  
    // Crear y configurar contenedores individuales para cada jugador
    this.players.forEach(player => {
      const playerContainer = document.createElement('div');
      playerContainer.classList.add('hand-container');
      playerContainer.id = `${player.getName()}`;
  
      // Configurar un contenedor para las cartas
      let cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
      playerContainer.appendChild(cardContainer);
  
      // Añadir placeholders de cartas
      for (let i = 0; i < 5; i++) {
        const cardPlaceholder = document.createElement('div');
        cardPlaceholder.classList.add('card');
        cardPlaceholder.innerHTML = `<div class="card-content"></div>`; // Contenido vacío inicialmente
        cardContainer.appendChild(cardPlaceholder);
      }
  
      // Añadir el contenedor del jugador al contenedor de jugadores principal
      playersContainer.appendChild(playerContainer);
    });
  
    // Asegurarse de que el contenedor de jugadores está en el documento
    if (!document.body.contains(playersContainer)) {
      document.body.appendChild(playersContainer); // Añadir al DOM si es necesario
    }
  }

  /**
   * @desc Adds a player to the game.
   * @param player - The player to add.
   */
  public addPlayer(player: Player): void {
    this.players.push(player);
  }

  /**
   * @desc Deletes a player from the game.
   * @param player - The player to delete.
   */
  public removePlayer(player: Player): void {
    const index = this.players.indexOf(player);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }

  /**
   * @desc Gets the players of the game.
   * @returns The players of the game.
   */
  public getPlayers(): Player[] {
    return this.players;
  }

  /**
   * @desc Determines the winner of the game.
   * @returns The winner of the game.
   */
  public determineWinner(): Player | null {
    /// Clasificamos las jugadas de todos los jugadores
    this.players.forEach(player => player.getHand().classify());
    /// Buscamos la mejor (la que tiene el mejor hetHandValue)
    /// En caso de empate, desempata compareHands
    let winner = this.players[0];
    for (let i = 1; i < this.players.length; i++) {
      if (this.compareHands(winner.getHand(), this.players[i].getHand()) < 0) {
        winner = this.players[i];
      }
    }
    return winner;
  }

  /**
   * @desc Compare two hands of poker.
   * @param hand1 - First poker hand.
   * @param hand2 - Second poker hand.
   * @returns 1 if hand1 is better, -1 if hand2 is better, 0 if they are equal.
   */
  private compareHands(hand1: PokerHand, hand2: PokerHand): number {
    /// Gana la carta con el getHighestCard más alto
    /// Primero va por palos, luego por valor
    let highestCard1 = PokerPlays.getHighestCard(hand1.getCards());
    let highestCard2 = PokerPlays.getHighestCard(hand2.getCards());
    const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suitDifference = SUITS.indexOf(highestCard2.getSuit()) - SUITS.indexOf(highestCard1.getSuit());
    if (suitDifference !== 0) return suitDifference;
    let rankDifference = RANKS.indexOf(highestCard2.getRank()) - RANKS.indexOf(highestCard1.getRank());
    return rankDifference;
  }
}

export { GameController };
