/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Division drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { DIVISION_STYLE } from '../utils/styles';

class DivisionDrawable {
  public static draw(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let endX = drawableAttributes.getAttribute('end');
    let startX = drawableAttributes.getAttribute('start');
    let numberOfTrapezoids = drawableAttributes.getAttribute('numberOfTrapezoids');
    let scaleY = drawableAttributes.getAttribute('scaleY');
    let minValue = drawableAttributes.getAttribute('minY');
    let expression = drawableAttributes.getAttribute('expression');
    // ------------------------------------------
    const WIDTH = context.canvas.width - 2 * margin; 
    const HEIGHT = (endX - startX) / numberOfTrapezoids;
    const X_AXIS_POSITION = context.canvas.height - margin - (0 - minValue) * scaleY; 
    // Draw each division
    for (let currentDivision = 0; currentDivision <= numberOfTrapezoids; currentDivision++) {
      let currentX = startX + currentDivision * HEIGHT;
      let xPosition = margin + (currentX - startX) / (endX - startX) * WIDTH;
      let yValue = expression.evaluate({ x: currentX });
      let yPosition = context.canvas.height - margin - (yValue - minValue) * scaleY;
      // Draw a red dot at each division point
      context.beginPath();
      context.fillStyle = DIVISION_STYLE.fillStyle;
      context.arc(xPosition, yPosition, 5, 0, Math.PI * 2);
      context.fill();
      // Draw vertical dashed lines from the function point down to the x-axis
      context.beginPath();
      context.moveTo(xPosition, yPosition);
      context.lineTo(xPosition, X_AXIS_POSITION);
      context.strokeStyle = DIVISION_STYLE.strokeStyle;
      context.setLineDash(DIVISION_STYLE.lineDash);
      context.stroke();
      context.setLineDash([]);
    }
  }
}

export { DivisionDrawable };