/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent stars
 */

import { Figure } from './figure.js';
import { Position } from './position.js';
import { Style } from './style.js';
import { CanvasWrapper } from './canvas-wrapper.js';

/** @classdesc A class to represent stars inheriting from Figure */
export class Star extends Figure {
  private points: number;
  private outerRadius: number;
  private innerRadius: number;

  /**
   * Create a star.
   * @param {number} points - The number of points (or tips) of the star.
   * @param {number} outerRadius - The outer radius of the star (distance from center to a tip).
   * @param {number} innerRadius - The inner radius of the star (distance from center to the dip between tips).
   * @param {Position} position - The position object for the star's center.
   * @param {Style} style - The style object for the star's appearance.
   * @param {CanvasWrapper} canvasWrapper - The canvasWrapper object for drawing operations.
   */
  constructor(points: number, outerRadius: number, innerRadius: number, position: Position, style: Style, canvasWrapper: CanvasWrapper) {
    super(position, style, canvasWrapper);
    this.points = points;
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
  }

  /**
   * Draw the star on the canvas.
   * @see https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
   */
  public draw(): void {
    const { context: CONTEXT } = this.canvasWrapper;
    CONTEXT.save();

    CONTEXT.fillStyle = this.style.fillColor;
    CONTEXT.strokeStyle = this.style.strokeColor;
    CONTEXT.lineWidth = this.style.strokeWidth;

    const angleIncrement = Math.PI / this.points;
    CONTEXT.beginPath();
    CONTEXT.moveTo(
      this.position.xPosition + this.outerRadius * Math.cos(0),
      this.position.yPosition + this.outerRadius * Math.sin(0)
    );

    for (let i = 0; i < 2 * this.points; i++) {
      const RADIUS = i % 2 === 0 ? this.outerRadius : this.innerRadius;
      const ANGLE = angleIncrement * i;
      CONTEXT.lineTo(
        this.position.xPosition + RADIUS * Math.cos(ANGLE),
        this.position.yPosition + RADIUS * Math.sin(ANGLE)
      );
    }

    CONTEXT.closePath();
    CONTEXT.fill();
    CONTEXT.stroke();

    CONTEXT.restore();
  }

  /**
   * Get the area of the star.
   * @return {number} - The area of the star.
   */
  public getArea(): number {
    return 0;
  }
}
