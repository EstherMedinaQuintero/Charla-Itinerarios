// /**
//  * Universidad de La Laguna
//  * Escuela Superior de Ingeniería y Tecnología
//  * Grado en Ingeniería Informática
//  * Programación de Aplicaciones Interactivas
//  *
//  * @author Esther M. Quintero
//  * @date Apr 16, 2024
//  * @description Tests to check the PokerHand class
//  */

// import { PokerHand } from "../models/poker-hand.js";
// import { Card } from "../models/card.js";

// /**
//  * @desc Create a PokerHand object with the given cards and label
//  * @param cards Array of cards to add to the hand
//  * @param label Label for the hand
//  * @returns PokerHand object
//  */
// function createHand(cards: Array<{ rank: string; suit: string }>, label: string): PokerHand {
//   const hand = new PokerHand(label);
//   cards.forEach(card => {
//     hand.addCard(new Card(card.rank, card.suit));
//   });
//   return hand;
// }

// function main() {
//   const pairHand = createHand([
//     { rank: '5', suit: 'Hearts' },
//     { rank: '5', suit: 'Diamonds' },
//     { rank: 'K', suit: 'Hearts' },
//     { rank: 'Q', suit: 'Spades' },
//     { rank: 'J', suit: 'Clubs' }
//   ], "Pair Hand");

//   const twoPairHand = createHand([
//     { rank: '9', suit: 'Hearts' },
//     { rank: '9', suit: 'Diamonds' },
//     { rank: 'K', suit: 'Hearts' },
//     { rank: 'K', suit: 'Spades' },
//     { rank: 'J', suit: 'Clubs' }
//   ], "Two Pair Hand");

//   const threeOfAKindHand = createHand([
//     { rank: '3', suit: 'Hearts' },
//     { rank: '3', suit: 'Diamonds' },
//     { rank: '3', suit: 'Clubs' },
//     { rank: 'Q', suit: 'Spades' },
//     { rank: 'J', suit: 'Clubs' }
//   ], "Three of a Kind Hand");

//   const straightHand = createHand([
//     { rank: 'A', suit: 'Hearts' },
//     { rank: '2', suit: 'Diamonds' },
//     { rank: '3', suit: 'Clubs' },
//     { rank: '4', suit: 'Spades' },
//     { rank: '5', suit: 'Clubs' }
//   ], "Straight Hand");

//   const flushHand = createHand([
//     { rank: '2', suit: 'Hearts' },
//     { rank: '5', suit: 'Hearts' },
//     { rank: '9', suit: 'Hearts' },
//     { rank: 'J', suit: 'Hearts' },
//     { rank: 'K', suit: 'Hearts' }
//   ], "Flush Hand");

//   const fullHouseHand = createHand([
//     { rank: '6', suit: 'Hearts' },
//     { rank: '6', suit: 'Diamonds' },
//     { rank: '6', suit: 'Clubs' },
//     { rank: 'K', suit: 'Spades' },
//     { rank: 'K', suit: 'Hearts' }
//   ], "Full House Hand");

//   const fourOfAKindHand = createHand([
//     { rank: '8', suit: 'Hearts' },
//     { rank: '8', suit: 'Diamonds' },
//     { rank: '8', suit: 'Clubs' },
//     { rank: '8', suit: 'Spades' },
//     { rank: 'J', suit: 'Hearts' }
//   ], "Four of a Kind Hand");

//   const straightFlushHand = createHand([
//     { rank: '9', suit: 'Clubs' },
//     { rank: '10', suit: 'Clubs' },
//     { rank: 'J', suit: 'Clubs' },
//     { rank: 'Q', suit: 'Clubs' },
//     { rank: 'K', suit: 'Clubs' }
//   ], "Straight Flush Hand");

//   const allHands = [
//     pairHand,
//     twoPairHand,
//     threeOfAKindHand,
//     straightHand,
//     flushHand,
//     fullHouseHand,
//     fourOfAKindHand,
//     straightFlushHand
//   ];

//   allHands.forEach(hand => {
//     console.log(`${hand.getLabel()} - Contains:`);
//     console.log(`Pair: ${hand.hasPair()}`);
//     console.log(`Two Pair: ${hand.hasTwoPair()}`);
//     console.log(`Three of a Kind: ${hand.hasThreeOfAKind()}`);
//     console.log(`Straight: ${hand.hasStraight()}`);
//     console.log(`Flush: ${hand.hasFlush()}`);
//     console.log(`Full House: ${hand.hasFullHouse()}`);
//     console.log(`Four of a Kind: ${hand.hasFourOfAKind()}`);
//     console.log(`Straight Flush: ${hand.hasStraightFlush()}`);
//     console.log('-----------------------------------');
//   });
// }

// main();