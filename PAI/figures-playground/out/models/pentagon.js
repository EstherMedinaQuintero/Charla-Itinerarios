/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent pentagons
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent pentagons inheriting from Figure */
export class Pentagon extends Figure {
    /**
     * Creates an instance of Pentagon.
     * @param {number} radius - The radius of the pentagon.
     * @param {Position} position - The position of the pentagon.
     * @param {Style} style - The style of the pentagon.
     * @param {CanvasWrapper} canvasWrapper - The canvas wrapper.
     */
    constructor(radius, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.radius = radius;
    }
    /**
     * Draws the pentagon in the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        /// Start drawing the pentagon
        CONTEXT.beginPath();
        /// Iterates through the five vertices of the pentagon
        const SIDES = 5;
        for (let i = 0; i < SIDES; i++) {
            /// Calculates the position of each vertex
            const ANGLE = 2 * Math.PI / SIDES * i - Math.PI / 2;
            const xPOS = this.position.xPosition + this.radius * Math.cos(ANGLE);
            const yPOS = this.position.yPosition + this.radius * Math.sin(ANGLE);
            /// Moves to the first vertex and draws lines to the rest of the vertices
            if (i === 0) {
                CONTEXT.moveTo(xPOS, yPOS);
            }
            else {
                CONTEXT.lineTo(xPOS, yPOS);
            }
        }
        /// Closes the path and fills and strokes the pentagon
        CONTEXT.closePath();
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Gets the area of the pentagon.
     * @return {number} - The area of the pentagon.
     */
    getArea() {
        const SIDES = 5;
        return (SIDES / 2) * Math.pow(this.radius, 2) * Math.tan(Math.PI / SIDES);
    }
}
