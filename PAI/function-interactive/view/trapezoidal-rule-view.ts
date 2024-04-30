/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Trapezoidal rule view
 * @details View
 *            ----> The application's user interface.
 *            ----> It is responsible for displaying data
 *            ----> It is responsible for capturing user interactions. 
 */

import { parse } from 'mathjs';
import { AxesDrawable } from '../drawables/axes-drawable';
import { FunctionDrawable } from '../drawables/function-drawable';
import { DivisionDrawable } from '../drawables/division-drawable';
import { TrapezoidDrawable } from '../drawables/trapezoid-drawable';
import { GridDrawable } from '../drawables/grid-drawable';
import { ResultDrawable } from '../drawables/result-drawable';
import { InputManager } from '../utils/input-manager';
import { DrawableAttributes } from '../utils/drawable-attributes';

class TrapezoidalRuleView {
  private context: CanvasRenderingContext2D;
  private updateButton: HTMLButtonElement;
  private inputManager: InputManager;

  /**
   * @desc Constructor of the class
   * @details It gets the elements directly from the HTML
   */
  constructor() {
    this.updateButton = document.getElementById('update-button') as HTMLButtonElement;
    let canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.inputManager = new InputManager();
  }

  /**
   * @desc Method to add a binding to the update button
   * @param handler - The function to be executed when the button is clicked
   */
  public addBindingToUpdate(handler: () => void): void {
    console.log('updateAddBinding');
    this.updateButton.addEventListener('click', (event: Event) => {
      handler();
    });
  }

  /**
   * @desc Method to draw the function and trapezoids on the canvas
   * @param expression - The expression to be evaluated
   * @param numberOfTrapezoids - The number of trapezoids to be used
   * @param start - The start of the interval
   * @param end - The end of the interval
   */
  public draw(expression: string, numberOfTrapezoids: number, start: number, end: number) {
    const EXPRESSION = parse(expression).compile();
    const X_VALUES = Array.from({ length: 1000 }, (_, i) => start + i * (end - start) / 999);
    const Y_VALUES = X_VALUES.map(x => EXPRESSION.evaluate({ x }));
    const MAX_VALUE = Math.max(0, ...Y_VALUES);
    const MIN_VALUE = Math.min(0, ...Y_VALUES);
    const RANGE = MAX_VALUE - MIN_VALUE;
    const MARGIN = 50;
    const SCALE_Y = (this.context.canvas.height - 2 * MARGIN) / RANGE;
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    // Package of attributes (to simplify the code)
    let drawableAttributes = new DrawableAttributes();
    drawableAttributes.addAttribute('context', this.context);
    drawableAttributes.addAttribute('margin', MARGIN);
    drawableAttributes.addAttribute('numVerticalLines', 10);
    drawableAttributes.addAttribute('numHorizontalLines', 10);
    drawableAttributes.addAttribute('start', start);
    drawableAttributes.addAttribute('end', end);
    drawableAttributes.addAttribute('maxY', MAX_VALUE);
    drawableAttributes.addAttribute('minY', MIN_VALUE);
    drawableAttributes.addAttribute('scaleY', SCALE_Y);
    drawableAttributes.addAttribute('numberOfTrapezoids', numberOfTrapezoids);
    drawableAttributes.addAttribute('expression', EXPRESSION);
    // Draw the elements
    GridDrawable.draw(drawableAttributes);
    AxesDrawable.draw(drawableAttributes);
    FunctionDrawable.draw(drawableAttributes);
    DivisionDrawable.draw(drawableAttributes);
    TrapezoidDrawable.draw(drawableAttributes);
    ResultDrawable.draw(drawableAttributes);
  }

  /// Getters
  public getExpressionInput(): HTMLInputElement { return this.inputManager.getInput('expression'); }
  public getNumberOfTrapezoidsInput(): HTMLInputElement { return this.inputManager.getInput('numberOfTrapezoids'); }
  public getStartInput(): HTMLInputElement { return this.inputManager.getInput('start'); }
  public getEndInput(): HTMLInputElement { return this.inputManager.getInput('end'); }
}

export { TrapezoidalRuleView };