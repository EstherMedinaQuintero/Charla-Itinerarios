/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Trapezoid drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { TRAPEZOID_STYLE } from '../utils/styles';

class TrapezoidDrawable {
  /**
   * @desc Method to draw the trapezoid
   * @param drawableAttributes - The attributes of the drawable
   */
  public static draw(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let startX = drawableAttributes.getAttribute('start');
    let endX = drawableAttributes.getAttribute('end');
    let minValue = drawableAttributes.getAttribute('minY');
    let numberOfTrapezoids = drawableAttributes.getAttribute('numberOfTrapezoids');
    let scaleY = drawableAttributes.getAttribute('scaleY');
    let expression = drawableAttributes.getAttribute('expression');
    // ------------------------------------------
    const WIDTH = context.canvas.width - 2 * margin;
    const HEIGHT = (endX - startX) / numberOfTrapezoids;
    context.fillStyle = TRAPEZOID_STYLE.fillStyle;
    const xAxisPosition = context.canvas.height - margin - (0 - minValue) * scaleY;
    // Draw each trapezoid
    for (let currentTrapezoid = 0; currentTrapezoid < numberOfTrapezoids; currentTrapezoid++) {
      let x1 = startX + currentTrapezoid * HEIGHT;
      let x2 = x1 + HEIGHT;
      let y1 = expression.evaluate({ x: x1 });
      let y2 = expression.evaluate({ x: x2 });
      let xPosition1 = margin + (x1 - startX) / (endX - startX) * WIDTH;
      let xPosition2 = margin + (x2 - startX) / (endX - startX) * WIDTH;
      let yPosition1 = context.canvas.height - margin - (y1 - minValue) * scaleY;
      let yPosition2 = context.canvas.height - margin - (y2 - minValue) * scaleY;
      context.beginPath();
      context.moveTo(xPosition1, xAxisPosition);
      context.lineTo(xPosition1, yPosition1);
      context.lineTo(xPosition2, yPosition2);
      context.lineTo(xPosition2, xAxisPosition);
      context.closePath();
      context.fill();
    }
  }
}

export { TrapezoidDrawable };