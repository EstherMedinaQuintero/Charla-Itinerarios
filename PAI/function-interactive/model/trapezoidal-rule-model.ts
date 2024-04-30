/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Trapezoidal rule model
 * @details Model
 *            ----> Manages the application's data
 *            ----> Provides methods to access it
 *            ----> Encapsulates application state
 *            ----> Doesn't know anything about the view
 */

import { parse } from 'mathjs';

class TrapezoidalRuleModel {
  private expression: string;
  private numberOfTrapezoids: number;
  private start: number;
  private end: number;

  /**
   * @desc Constructor of the class
   * @param expression - The expression to be evaluated
   * @param numberOfTrapezoids - The number of trapezoids to be used
   * @param start - The start of the interval
   * @param end - The end of the interval
   */
  constructor(expression: string = "x^2 + 1", numberOfTrapezoids: number = 4, start: number = 0, end: number = 2) {
    this.expression = expression;
    this.numberOfTrapezoids = numberOfTrapezoids;
    this.start = start;
    this.end = end;
  }

  /**
   * @desc Setter for the expression
   * @param expression - The new expression
   * @details It checks if the expression is valid
   */
  public setExpression(expression: string): void { 
    try {
      parse(expression);
      this.expression = expression;
    } catch (error) {
      this.expression = "x^2 + 1";
      console.error('Error: unexpected function');
      console.error("--> Default function set");
    }
  }

  /**
   * @desc Setter for the number of trapezoids
   * @param numer - The new number of trapezoids
   * @details It checks if the number is valid
   */
  public setNumberOfTrapezoids(number: number): void { 
    if (number > 0) {
      this.numberOfTrapezoids = number;
    } else {
      this.numberOfTrapezoids = 4;
      console.error("Error: Unexpected number of trapezoids");
      console.error("--> Default number of trapezoids set");
    }
  }

  /// Start and end setters
  public setStart(start: number): void { this.start = start; }
  public setEnd(end: number): void { this.end = end; }

  /// Getters
  public getExpression(): string { return this.expression; }
  public getNumberOfTrapezoids(): number { return this.numberOfTrapezoids; }
  public getStart(): number { return this.start; }
  public getEnd(): number { return this.end; }
}

export { TrapezoidalRuleModel };