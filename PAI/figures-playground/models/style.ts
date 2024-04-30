/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class to represent a style
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
 */

/**
 * Manages the style of a graphical object, including fill and stroke colors, and stroke width.
 */
export class Style {
  private colorFill: string;
  private colorStroke: string;
  private widthStroke: number;

  /**
   * Creates an instance of Style.
   * @param {string} fillColor - The fill color of the object.
   * @param {string} strokeColor - The stroke color of the object.
   * @param {number} strokeWidth - The stroke width of the object.
   */
  constructor(fillColor: string = 'black', strokeColor: string = 'black', strokeWidth: number = 1) {
    this.colorFill = fillColor;
    this.colorStroke = strokeColor;
    this.widthStroke = strokeWidth;
  }

  /// Getters
  public get fillColor(): string {
    return this.colorFill;
  }

  public get strokeColor(): string {
    return this.colorStroke;
  }

  public get strokeWidth(): number {
    return this.widthStroke;
  }

  /**
   * Sets the style of the object.
   * @param {string} fillColor - The new fill color.
   * @param {string} strokeColor - The new stroke color.
   * @param {number} strokeWidth - The new stroke width.
   */
  public setStyle(fillColor: string, strokeColor: string, strokeWidth: number): void {
    this.colorFill = fillColor;
    this.colorStroke = strokeColor;
    this.widthStroke = strokeWidth;
  }

  /**
   * Generates and applies a random style to the object.
   */
  public setRandomStyle(): void {
    this.colorFill = this.getRandomColor();
    this.colorStroke = this.getRandomColor();
    this.widthStroke = Math.random() * 5 + 1; /// Random stroke width between 1 and 5
  }

  /**
   * Generates a random color in hexadecimal format.
   * @return {string} - A random hexadecimal color string.
   */
  private getRandomColor(): string {
    /// Generates a random number between 0 and 255, then converts it to a hexadecimal string
    const RANDOM_COLOR_PART = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${RANDOM_COLOR_PART()}${RANDOM_COLOR_PART()}${RANDOM_COLOR_PART()}`;
  }

  /**
   * Returns a string representation of the style.
   * @return {string} - A string that represents the current style settings.
   */
  public toString(): string {
    return `Style (fillColor: ${this.colorFill}, strokeColor: ${this.colorStroke}, strokeWidth: ${this.widthStroke})`;
  }
}
