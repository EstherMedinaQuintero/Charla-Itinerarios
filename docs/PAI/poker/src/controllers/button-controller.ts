/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a button controller
 */

import { PokerGame } from '../poker-game.js';
import { DeckView } from '../views/deck-view.js';
import { HandView } from '../views/hand-view.js';

class ButtonController {
  private deckView: DeckView;
  private handViews: HandView[] = [];
  private playersContainer: HTMLElement;

  /**
   * @desc Constructor of the class
   * @param game - Game
   * @param deckContainerId - Id of the container of the deck
   * @param playersContainerId - Id of the container of the players
   */
  constructor(game: PokerGame, deckContainerId: string, playersContainerId: string) {
    this.playersContainer = document.getElementById(playersContainerId) as HTMLElement;
    const deckContainer = document.getElementById(deckContainerId) as HTMLElement;
    this.deckView = new DeckView(game.getDeck(), deckContainer);
    this.deckView.render(game.getDeck());
    this.initializeButtons(game);
  }

  /**
   * @desc Initializes the buttons
   */
  private initializeButtons(game: PokerGame): void {
    let dealHand1Button = document.getElementById('deal-hand1') as HTMLButtonElement;
    let dealHand2Button = document.getElementById('deal-hand2') as HTMLButtonElement;
    // let dealCardsButton = document.getElementById('dealCards') as HTMLButtonElement;
    // let showWinnerButton = document.getElementById('showWinner') as HTMLButtonElement;
    // let resetGameButton = document.getElementById('resetGame') as HTMLButtonElement;

    let hand1Dealt = false;
    let hand2Dealt = false;

    const checkAndShowWinner = () => {
      if (hand1Dealt && hand2Dealt) {
        setTimeout(() => {
          alert(game.showWinner());
          dealHand1Button.disabled = true;
          dealHand2Button.disabled = true;
          hand1Dealt = false;
          hand2Dealt = false;
        }, 100);
      }
    };

    dealHand1Button.addEventListener('click', () => {
      try {
        game.resetGame();
        const hand = game.dealCardsToPlayer(0);
        const handContainerId = 'Player 1';
        let handContainer = document.getElementById(handContainerId);
        if (!handContainer) {
          handContainer = document.createElement('div');
          handContainer.id = handContainerId;
          this.playersContainer.appendChild(handContainer);
        } else {
          handContainer.innerHTML = '';
        }
        const handView = new HandView(hand, handContainer);
        handView.render();
        hand1Dealt = true;
        checkAndShowWinner();
      } catch (error) {
        alert((error as Error).message);
      }
    });

    dealHand2Button.addEventListener('click', () => {
      try {
        game.resetGame();
        const hand = game.dealCardsToPlayer(1);
        const handContainerId = 'Player 2';
        let handContainer = document.getElementById(handContainerId);
        if (!handContainer) {
          handContainer = document.createElement('div');
          handContainer.id = handContainerId;
          this.playersContainer.appendChild(handContainer);
        } else {
          handContainer.innerHTML = '';
        }
        const handView = new HandView(hand, handContainer);
        handView.render();
        hand2Dealt = true;
        checkAndShowWinner();
      } catch (error) {
        alert((error as Error).message);
      }
    });

    // dealCardsButton.addEventListener('click', () => {
    //   try {
    //     game.resetGame(); /// Reiniciar las cartas al repartir
    //     const hands = game.dealCards();
    //     this.playersContainer.innerHTML = '';
    //     this.handViews = [];
    //     hands.forEach(hand => {
    //       const handContainer = document.createElement('div');
    //       this.playersContainer.appendChild(handContainer);
    //       const handView = new HandView(hand, handContainer);
    //       handView.render();
    //       this.handViews.push(handView);
    //     });
    //     this.deckView.updateDeck(game.getDeck());
    //   } catch (error) {
    //     alert((error as Error).message);
    //   }
    // });

    // showWinnerButton.addEventListener('click', () => {
    //   alert(game.showWinner());
    // });

    // resetGameButton.addEventListener('click', () => {
    //   game.resetGame();
    //   this.playersContainer.innerHTML = '';
    //   this.handViews = []; // Clear the HandViews
    //   this.deckView.updateDeck(game.getDeck());
    // });
  }
}

export { ButtonController };
