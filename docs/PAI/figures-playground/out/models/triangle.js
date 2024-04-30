/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent triangles
 */
import { Figure } from './figure.js';
/** @classdesc A class to represent triangles inheriting from Figure */
export class Triangle extends Figure {
    /**
     * Create a triangle.
     * @param {number} sideLength - The length of each side of the triangle.
     * @param {Position} position - The position object for the triangle's position. Represents the top vertex of the triangle.
     * @param {Style} style - The style object for the triangle's appearance.
     * @param {CanvasWrapper} canvasWrapper - The canvasWrapper object for drawing operations.
     */
    constructor(sideLength, position, style, canvasWrapper) {
        super(position, style, canvasWrapper);
        this.sideLength = sideLength;
    }
    /**
     * Draw the triangle on the canvas.
     */
    draw() {
        const { context: CONTEXT } = this.canvasWrapper;
        CONTEXT.save();
        CONTEXT.fillStyle = this.style.fillColor;
        CONTEXT.strokeStyle = this.style.strokeColor;
        CONTEXT.lineWidth = this.style.strokeWidth;
        /// Calculate vertices of the equilateral triangle
        const HEIGHT = (Math.sqrt(3) / 2) * this.sideLength;
        const VERTEX_A = { xA: this.position.xPosition, yA: this.position.yPosition };
        const VERTEX_B = { xB: VERTEX_A.xA + this.sideLength / 2, yB: VERTEX_A.yA + HEIGHT };
        const VERTEX_C = { xC: VERTEX_A.xA - this.sideLength / 2, yC: VERTEX_B.yB };
        CONTEXT.beginPath();
        CONTEXT.moveTo(VERTEX_A.xA, VERTEX_A.yA);
        CONTEXT.lineTo(VERTEX_B.xB, VERTEX_B.yB);
        CONTEXT.lineTo(VERTEX_C.xC, VERTEX_C.yC);
        CONTEXT.closePath();
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.restore();
    }
    /**
     * Get the area of the triangle.
     * @return {number} - The area of the triangle.
     */
    getArea() {
        const HEIGHT = (Math.sqrt(3) / 2) * this.sideLength;
        return (this.sideLength * HEIGHT) / 2;
    }
}
