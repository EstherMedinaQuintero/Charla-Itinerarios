/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent squares
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent squares inheriting from Figure */
export class Square extends Figure {
    /**
     * Create a square.
     * @param {number} size - The size of the square's sides.
     * @param {Position} position - The position object for the square's position.
     * @param {Style} style - The style object for the square's appearance.
     * @param {CanvasWrapper} canvasWrapper - The CanvasWrapper object for drawing operations.
     */
    constructor(size, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.size = size;
    }
    /**
     * Draw the square on the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        // Drawing the square by specifying the top left corner position and the size
        CONTEXT.beginPath();
        CONTEXT.rect(this.position.xPosition, this.position.yPosition, this.size, this.size);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Get the area of the square.
     * @return {number} - The area of the square.
     */
    getArea() {
        return this.size * this.size;
    }
}
