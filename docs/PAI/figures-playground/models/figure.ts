/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent a generic figure using the Canvas API.
 */

import { Position } from './position.js';
import { Style } from './style.js';
import { CanvasWrapper } from './canvas-wrapper.js';

/**
 * Abstract class representing a generic figure. This class uses composition to
 * include position, style, and canvas handling functionalities.
 */
export abstract class Figure {
  protected position: Position;
  protected style: Style;
  protected canvasWrapper: CanvasWrapper;

  /**
   * Creates a figure with specified position, style, and canvas.
   * @param {Position} position - The position of the figure.
   * @param {Style} style - The style (fill color, stroke color, stroke width) of the figure.
   * @param {CanvasWrapper} canvasWrapper - The canvas wrapper to handle drawing operations.
   */
  constructor(position: Position, style: Style, canvasWrapper: CanvasWrapper) {
    this.position = position;
    this.style = style;
    this.canvasWrapper = canvasWrapper;
  }

  /**
   * Abstract method to draw the figure on the canvas. Must be implemented by subclasses.
   */
  abstract draw(): void;

  /**
   * Abstract method to get the area of the figure. Must be implemented by subclasses.
   */
  abstract getArea(): number;

  /**
   * Moves a figure to a new position and redraws it.
   */
  public move(newX: number, newY: number): void {
    this.position.setPosition(newX, newY);
    this.draw();
  }

  /**
   * Moves a figure to a random position
   */
  public moveRandom(): void {
    this.position.setRandomPosition(this.canvasWrapper.getCanvas());
    this.draw();
  }

}
