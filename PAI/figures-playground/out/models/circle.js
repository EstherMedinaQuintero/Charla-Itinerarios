/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent circles
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent circles inheriting from Figure */
export class Circle extends Figure {
    /**
     * Create a circle.
     * @param {number} radius - Radius of the circle.
     * @param {Position} position - The position object for the circle's center.
     * @param {Style} style - The style object for the circle's appearance.
     * @param {CanvasWrapper} canvasWrapper - The canvasWrapper object for drawing operations.
     */
    constructor(radius, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.radius = radius;
    }
    /**
     * Draw the circle on the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        CONTEXT.beginPath();
        /// Create a circle
        CONTEXT.arc(this.position.xPosition, this.position.yPosition, this.radius, 0, Math.PI * 2);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Get the area of the circle.
     * @return {number} - The area of the circle.
     */
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
