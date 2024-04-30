/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent rectangles
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent rectangles inheriting from Figure */
export class Rectangle extends Figure {
    /**
     * Create a rectangle.
     * @param {number} width - Width of the rectangle.
     * @param {number} height - Height of the rectangle.
     * @param {Position} position - The position object for the rectangle's position.
     * @param {Style} style - The style object for the rectangle's appearance.
     * @param {CanvasWrapper} canvasWrapper - The canvasWrapper object for drawing operations.
     */
    constructor(width, height, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.width = width;
        this.height = height;
    }
    /**
     * Draw the rectangle on the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        CONTEXT.beginPath();
        CONTEXT.rect(this.position.xPosition, this.position.yPosition, this.width, this.height);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Get the area of the rectangle.
     * @return {number} - The area of the rectangle.
     */
    getArea() {
        return this.width * this.height;
    }
}
