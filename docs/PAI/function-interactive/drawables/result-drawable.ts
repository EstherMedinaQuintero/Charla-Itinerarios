/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Result drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { RESULT_STYLE } from '../utils/styles';

class ResultDrawable {
  /**
   * @desc Method to draw the result
   * @param drawableAttributes - The attributes of the drawable
   */
  public static draw(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let startX = drawableAttributes.getAttribute('start');
    let endX = drawableAttributes.getAttribute('end');
    let numberOfTrapezoids = drawableAttributes.getAttribute('numberOfTrapezoids');
    let expression = drawableAttributes.getAttribute('expression');
    // ------------------------------------------
    context.beginPath();
    let totalArea = 0;
    const WIDTH = (endX - startX) / numberOfTrapezoids;
    for (let currentTrapezoid = 0; currentTrapezoid < numberOfTrapezoids; currentTrapezoid++) {
      let x1 = startX + currentTrapezoid * WIDTH;
      let x2 = x1 + WIDTH;
      let y1 = expression.evaluate({ x: x1 });
      let y2 = expression.evaluate({ x: x2 });
      // Calculate area of each trapezoid and sum them up
      totalArea += (y1 + y2) * WIDTH / 2;
    }
    // Draw the result on the canvas
    context.fillStyle = RESULT_STYLE.fillStyle;
    context.font = RESULT_STYLE.font;
    context.textAlign = RESULT_STYLE.textAlign;
    context.fillText(`Integral value: ${totalArea.toFixed(RESULT_STYLE.precission)}`, context.canvas.width / 2, margin / 2);
    context.closePath();
  }
}

export { ResultDrawable };