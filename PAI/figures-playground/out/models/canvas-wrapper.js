/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent a canvas wrapper
 */
/**
 * Encapsulates the canvas element and its drawing context, simplifying interactions.
 */
export class CanvasWrapper {
    /**
     * Initializes a new instance of the CanvasWrapper class.
     * @param {string} canvasId - The ID of the canvas element in the DOM.
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error('Canvas element not found');
        }
        const context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error('Failed to get canvas rendering context');
        }
        this.context = context;
    }
    /**
     * Clears the entire canvas, removing all drawn content.
     */
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * Resizes the canvas to the specified width and height.
     * @param {number} width - The new width for the canvas.
     * @param {number} height - The new height for the canvas.
     */
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    /**
     * Provides a method to save the current state of the canvas context.
     */
    saveState() {
        this.context.save();
    }
    /**
     * Restores the most recently saved canvas context state.
     */
    restoreState() {
        this.context.restore();
    }
    /**
     * Sets the background color of the canvas.
     * @param {string} color - The color to set as the background of the canvas.
     */
    setBackgroundColor(color) {
        this.context.save();
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.restore();
    }
    /**
     * Gets the canvas element.
     * @returns {HTMLCanvasElement} The canvas element.
     */
    getCanvas() {
        return this.canvas;
    }
}
