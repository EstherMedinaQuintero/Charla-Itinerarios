/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent a generic figure using the Canvas API.
 */
/**
 * Abstract class representing a generic figure. This class uses composition to
 * include position, style, and canvas handling functionalities.
 */
export class Figure {
    /**
     * Creates a figure with specified position, style, and canvas.
     * @param {Position} position - The position of the figure.
     * @param {Style} style - The style (fill color, stroke color, stroke width) of the figure.
     * @param {CanvasWrapper} canvasWrapper - The canvas wrapper to handle drawing operations.
     */
    constructor(position, style, canvasWrapper) {
        this.position = position;
        this.style = style;
        this.canvasWrapper = canvasWrapper;
    }
    /**
     * Moves a figure to a new position and redraws it.
     */
    move(newX, newY) {
        this.position.setPosition(newX, newY);
        this.draw();
    }
    /**
     * Moves a figure to a random position
     */
    moveRandom() {
        this.position.setRandomPosition(this.canvasWrapper.getCanvas());
        this.draw();
    }
}
