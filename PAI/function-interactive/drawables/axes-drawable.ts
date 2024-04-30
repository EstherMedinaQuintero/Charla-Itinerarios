/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Axis drawable
 */

import { DrawableAttributes } from '../utils/drawable-attributes';
import { AXES_STYLE } from '../utils/styles';

class AxesDrawable {
  /**
   * @desc Method to draw the axes, labels and ticks
   * @param drawableAttributes - The attributes of the drawable
   */
  public static draw(drawableAttributes: DrawableAttributes): void {
    this.drawAxes(drawableAttributes);
    this.drawLabels(drawableAttributes);
    this.drawTicks(drawableAttributes);
  }

  /**
   * @desc Method to draw the axes
   * @param drawableAttributes - The attributes of the drawable
   */
  private static drawAxes(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    // ------------------------------------------
    // Draw X axis
    context.beginPath();
    context.strokeStyle = AXES_STYLE.strokeStyle;
    context.moveTo(margin, context.canvas.height - margin);
    context.lineTo(context.canvas.width - margin, context.canvas.height - margin);
    // Draw Y axis
    context.moveTo(margin, context.canvas.height - margin);
    context.lineTo(margin, margin);
    context.stroke();
  }

  /**
   * @desc Method to draw the labels
   * @param drawableAttributes - The attributes of the drawable
   */
  private static drawLabels(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let maxY = drawableAttributes.getAttribute('maxY');
    let minY = drawableAttributes.getAttribute('minY');
    let startX = drawableAttributes.getAttribute('start');
    let endX = drawableAttributes.getAttribute('end');
    // ------------------------------------------
    let numLabelsX = AXES_STYLE.numLabelsX;
    let numLabelsY = AXES_STYLE.numLabelsY;
    let rangeY = maxY - minY;
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;
    // X axis labels
    for (let currentX = 0; currentX <= numLabelsX; currentX++) {
      context.beginPath();
      let xValue = startX + currentX * (endX - startX) / numLabelsX;
      let xPosition = margin + currentX * (canvasWidth - 2 * margin) / numLabelsX;
      context.fillText(xValue.toFixed(1), xPosition, canvasHeight - margin + AXES_STYLE.displacement);
      context.closePath();
    }
    // Y axis labels
    for (let currentY = 0; currentY <= numLabelsY; currentY++) {
      context.beginPath();
      let yValue = minY + currentY * rangeY / numLabelsY;
      let yPosition = canvasHeight - margin - (yValue - minY) / rangeY * (canvasHeight - 2 * margin);
      context.fillText(yValue.toFixed(AXES_STYLE.precission), margin - AXES_STYLE.displacement, yPosition);
      context.closePath();
    }
  }

  /**
   * @desc Method to draw the ticks
   * @param drawableAttributes - The attributes of the drawable
   */
  private static drawTicks(drawableAttributes: DrawableAttributes): void {
    // ------------------- Unpackage of attributes
    let context = drawableAttributes.getAttribute('context');
    let margin = drawableAttributes.getAttribute('margin');
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;
    // ------------------------------------------
    context.strokeStyle = 'black';
    // X axis ticks
    for (let i = 0; i <= 10; i++) {
      context.beginPath();
      let xPosition = margin + i * (canvasWidth - 2 * margin) / 10;
      context.moveTo(xPosition, context.canvas.height - margin);
      context.lineTo(xPosition, context.canvas.height - margin + 5);
      context.stroke();
      context.closePath();
    }
    // Y axis ticks
    for (let i = 0; i <= 5; i++) {
      context.beginPath();
      let yPosition = margin + i * (canvasHeight - 2 * margin) / 5;
      context.moveTo(margin, yPosition);
      context.lineTo(margin - 5, yPosition);
      context.stroke();
      context.closePath();
    }
  }
}

export { AxesDrawable };