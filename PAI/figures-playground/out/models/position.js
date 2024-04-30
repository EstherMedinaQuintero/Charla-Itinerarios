/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent a position
 */
/**
 * Represents the position of a graphical object within a canvas.
 */
export class Position {
    /**
     * Creates an instance of Position.
     * @param {number} xPosition - The x-coordinate of the position.
     * @param {number} yPosition - The y-coordinate of the position.
     */
    constructor(xPosition = 0, yPosition = 0) {
        this.xPos = xPosition;
        this.yPos = yPosition;
    }
    /**
     * Sets the position to a specific x and y coordinate.
     * @param {number} xNew - The new x-coordinate.
     * @param {number} yNew - The new y-coordinate.
     */
    setPosition(xNew, yNew) {
        this.xPos = xNew;
        this.yPos = yNew;
    }
    /// Getters
    get xPosition() {
        return this.xPos;
    }
    get yPosition() {
        return this.yPos;
    }
    /**
     * Sets the position to a random location within the bounds of the canvas.
     * This method is useful for placing figures at random positions within a defined area.
     * @param {HTMLCanvasElement} canvas - The canvas element to define the boundaries for the random position.
     */
    setRandomPosition(canvas) {
        this.xPos = Math.random() * canvas.width;
        this.yPos = Math.random() * canvas.height;
    }
    getRandomPosition(canvas) {
        return new Position(Math.random() * canvas.width, Math.random() * canvas.height);
    }
    /**
     * Copies the coordinates from another position.
     * @param {Position} position - The position to copy from.
     */
    copyFrom(position) {
        this.xPos = position.xPos;
        this.yPos = position.yPos;
    }
    /**
     * Creates a new instance of Position with the same coordinates.
     * @returns New instance of Position with the same coordinates.
     */
    clone() {
        return new Position(this.xPos, this.yPos);
    }
    /**
     * Checks if the position is equal to another position.
     * @param {Position} position - The position to compare.
     * @returns true if the positions are equal, false otherwise.
     */
    equals(position) {
        return this.xPos === position.xPos && this.yPos === position.yPos;
    }
    /**
     * String representation of the position.
     * @returns A string representation of the position.
     */
    toString() {
        return `Position(x: ${this.xPos}, y: ${this.yPos})`;
    }
}
