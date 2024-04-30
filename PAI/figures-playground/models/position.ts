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
  private xPos: number;
  private yPos: number;

  /**
   * Creates an instance of Position.
   * @param {number} xPosition - The x-coordinate of the position.
   * @param {number} yPosition - The y-coordinate of the position.
   */
  constructor(xPosition: number = 0, yPosition: number = 0) {
    this.xPos = xPosition;
    this.yPos = yPosition;
  }

  /**
   * Sets the position to a specific x and y coordinate.
   * @param {number} xNew - The new x-coordinate.
   * @param {number} yNew - The new y-coordinate.
   */
  public setPosition(xNew: number, yNew: number): void {
    this.xPos = xNew;
    this.yPos = yNew;
  }

  /// Getters
  public get xPosition(): number {
    return this.xPos;
  }
  
  public get yPosition(): number {
    return this.yPos;
  }

  /**
   * Sets the position to a random location within the bounds of the canvas.
   * This method is useful for placing figures at random positions within a defined area.
   * @param {HTMLCanvasElement} canvas - The canvas element to define the boundaries for the random position.
   */
  public setRandomPosition(canvas: HTMLCanvasElement): void {
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
  }

  public getRandomPosition(canvas: HTMLCanvasElement): Position {
    return new Position(Math.random() * canvas.width, Math.random() * canvas.height);
  }

  /**
   * Copies the coordinates from another position.
   * @param {Position} position - The position to copy from.
   */
  public copyFrom(position: Position): void {
    this.xPos = position.xPos;
    this.yPos = position.yPos;
  }

  /**
   * Creates a new instance of Position with the same coordinates.
   * @returns New instance of Position with the same coordinates.
   */
  public clone(): Position {
    return new Position(this.xPos, this.yPos);
  }

  /**
   * Checks if the position is equal to another position.
   * @param {Position} position - The position to compare.
   * @returns true if the positions are equal, false otherwise.
   */
  public equals(position: Position): boolean {
    return this.xPos === position.xPos && this.yPos === position.yPos;
  }

  /**
   * String representation of the position.
   * @returns A string representation of the position.
   */
  public toString(): string {
    return `Position(x: ${this.xPos}, y: ${this.yPos})`;
  }
}
