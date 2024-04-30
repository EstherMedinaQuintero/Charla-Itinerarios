/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Function drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { FUNCTION_STYLE } from '../utils/styles';

class FunctionDrawable {
  /**
   * @desc Method to draw the function expression
   * @param drawableAttributes - The attributes of the drawable
   */
  public static draw(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let startX = drawableAttributes.getAttribute('start');
    let endX = drawableAttributes.getAttribute('end');
    let minValue = drawableAttributes.getAttribute('minY');
    let expression = drawableAttributes.getAttribute('expression');
    let scaleY = drawableAttributes.getAttribute('scaleY');
    // ------------------------------------------
    context.beginPath();
    context.strokeStyle = FUNCTION_STYLE.strokeStyle;
    context.lineWidth = FUNCTION_STYLE.lineWidth;
    const WIDTH = context.canvas.width;
    const HEIGHT = context.canvas.height;
    // Iterate over pixels
    for (let pixel = 0; pixel <= WIDTH - 2 * margin; pixel++) {
      // Convert pixel to actual x value in the function's domain
      let currentX = startX + (pixel / (WIDTH - 2 * margin)) * (endX - startX);
      let xPosition = margin + pixel;
      // Evaluate the function at the current x value
      let yValue = expression.evaluate({ x: currentX });
      let yPosition = HEIGHT - margin - (yValue - minValue) * scaleY;
      // Move to the start point or draw line to the next point
      if (pixel === 0) {
        context.moveTo(xPosition, yPosition);
      } else {
        context.lineTo(xPosition, yPosition);
      }
    }
    context.stroke();
    context.closePath();
  }
}

export { FunctionDrawable };