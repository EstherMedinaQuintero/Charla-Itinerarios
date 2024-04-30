/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Grid drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { GRID_STYLE } from '../utils/styles';

class GridDrawable {
  /**
   * @desc Method to draw the grid
   * @param drawableAttributes - The attributes of the drawable
   */
  public static draw(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    // ------------------------------------------
    let numVerticalLines = GRID_STYLE.numLabelsX;
    let numHorizontalLines = GRID_STYLE.numLabelsY;
    const WIDTH = context.canvas.width;
    const HEIGHT = context.canvas.height;
    const VERTICAL_STEP = (WIDTH - 2 * margin) / numVerticalLines;
    const HORIZONTAL_STEP = (HEIGHT - 2 * margin) / numHorizontalLines;
    context.strokeStyle = GRID_STYLE.strokeStyle;
    context.beginPath();
    // Draw vertical grid lines
    for (let currentLine = 1; currentLine < numVerticalLines; currentLine++) {
      let xCoord = margin + currentLine * VERTICAL_STEP;
      context.moveTo(xCoord, margin);
      context.lineTo(xCoord, HEIGHT - margin);
    }
    // Draw horizontal grid lines
    for (let currentLine = 1; currentLine < numHorizontalLines; currentLine++) {
      let yCoord = margin + currentLine * HORIZONTAL_STEP;
      context.moveTo(margin, yCoord);
      context.lineTo(WIDTH - margin, yCoord);
    }
    context.stroke();
  }
}

export { GridDrawable };