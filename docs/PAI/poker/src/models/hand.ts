/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Apr 16, 2024
 * @description Class to represent a hand of cards
 */

import { CardContainer } from "./card-container.js";

class Hand extends CardContainer {
  private label: string;

  /**
   * @desc Constructor of the class
   * @param label - Label of the hand
   */
  constructor(label: string = "Hand") {
    super();
    this.label = label;
  }

  /**
   * @desc Returns the label of the hand
   * @returns A string with the label of the hand
   */
  public getLabel(): string {
    return this.label;
  }
}

export { Hand };
