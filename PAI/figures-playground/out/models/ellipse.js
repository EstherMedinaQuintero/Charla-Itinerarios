/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent ellipses
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent ellipses inheriting from Figure */
export class Ellipse extends Figure {
    /**
     * Creates an instance of Ellipse.
     * @param {number} radiusX - The radius of the ellipse in the X axis.
     * @param {number} radiusY - The radius of the ellipse in the Y axis.
     * @param {Position} position - The position of the ellipse.
     * @param {Style} style - The style of the ellipse.
     * @param {CanvasWrapper} canvasWrapper - The canvas wrapper.
     */
    constructor(radiusX, radiusY, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
    /**
     * Draws the ellipse in the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        CONTEXT.beginPath();
        CONTEXT.ellipse(this.position.xPosition, this.position.yPosition, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Gets the area of the ellipse.
     * @return {number} - The area of the ellipse.
     */
    getArea() {
        return Math.PI * this.radiusX * this.radiusY;
    }
}
