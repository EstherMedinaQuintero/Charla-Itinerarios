/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent hearts
 */

import { Figure } from './figure.js';
import { Position } from './position.js';
import { Style } from './style.js';
import { CanvasWrapper } from './canvas-wrapper.js';

/** @classdesc A class to represent hearts inheriting from Figure */
export class Heart extends Figure {
  private size: number; // Controla el tamaño del corazón

  /**
   * Crea un corazón.
   * @param {number} size - Tamaño del corazón.
   * @param {Position} position - Objeto de posición para el centro del corazón.
   * @param {Style} style - Objeto de estilo para la apariencia del corazón.
   * @param {CanvasWrapper} canvasWrapper - Objeto CanvasWrapper para operaciones de dibujo.
   */
  constructor(size: number, position: Position, style: Style, canvasWrapper: CanvasWrapper) {
    super(position, style, canvasWrapper);
    this.size = size;
  }

  /**
   * Dibuja el corazón en el canvas.
   */
  public draw(): void {
    const { context } = this.canvasWrapper;
    context.save();

    context.beginPath();
    const topCurveHeight = this.size * 0.3;
    // Mueve al punto de inicio de la curva superior izquierda
    context.moveTo(this.position.xPosition, this.position.yPosition + topCurveHeight);

    // Curva superior izquierda
    context.bezierCurveTo(
      this.position.xPosition, this.position.yPosition, 
      this.position.xPosition - this.size / 2, this.position.yPosition, 
      this.position.xPosition - this.size / 2, this.position.yPosition + topCurveHeight
    );

    // Curva inferior izquierda
    context.bezierCurveTo(
      this.position.xPosition - this.size / 2, this.position.yPosition + (this.size + topCurveHeight) / 2, 
      this.position.xPosition, this.position.yPosition + (this.size + topCurveHeight) / 2, 
      this.position.xPosition, this.position.yPosition + this.size
    );

    // Curva inferior derecha
    context.bezierCurveTo(
      this.position.xPosition, this.position.yPosition + (this.size + topCurveHeight) / 2, 
      this.position.xPosition + this.size / 2, this.position.yPosition + (this.size + topCurveHeight) / 2, 
      this.position.xPosition + this.size / 2, this.position.yPosition + topCurveHeight
    );

    // Curva superior derecha
    context.bezierCurveTo(
      this.position.xPosition + this.size / 2, this.position.yPosition, 
      this.position.xPosition, this.position.yPosition, 
      this.position.xPosition, this.position.yPosition + topCurveHeight
    );

    context.closePath();
    context.fillStyle = this.style.fillColor;
    context.fill();

    if (this.style.strokeWidth > 0) {
      context.strokeStyle = this.style.strokeColor;
      context.lineWidth = this.style.strokeWidth;
      context.stroke();
    }

    context.restore();
  }


  /**
   * Obtiene el área del corazón.
   * @return {number} - El área del corazón.
   */
  public getArea(): number {
    return 0;
  }
}
