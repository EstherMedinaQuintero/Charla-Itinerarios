/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 10, 2024
 * @description Class view to render figures
 */

import { Rectangle } from './models/rectangle.js';
import { Circle } from './models/circle.js';
import { Square } from './models/square.js';
import { Ellipse } from './models/ellipse.js';
import { Star } from './models/star.js';
import { Triangle } from './models/triangle.js';
import { Pentagon } from './models/pentagon.js';
import { Position } from './models/position.js';
import { Heart } from './models/heart.js';
import { Figure } from './models/figure.js';
import { Style } from './models/style.js';
import { CanvasWrapper } from './models/canvas-wrapper.js';


/**
 * Class to render figures on a canvas.
 */
export class View {
  private canvasWrapper: CanvasWrapper;

  /**
   * Creates an instance of View.
   * @param {string} canvasId - The id of the canvas element to render the figures on.
   */
  constructor(canvasId: string) {
    this.canvasWrapper = new CanvasWrapper(canvasId);
    this.createButtons();
  }

  /**
   * Renders a specified number of figures on the canvas.
   */
  public async renderFigures(): Promise<void> {
    const FIGURE_COUNT = parseInt(prompt("¿Cuántas figuras desea dibujar?", "5") || "0");
    for (let i = 0; i < FIGURE_COUNT; i++) {
      this.drawRandomFigure();
    }
  }

  /**
   * Creates buttons to generate figures.
   */
  private createButtons(): void {
    let container = document.createElement('div');
    container.className = 'button-container';

    let generateButton = document.createElement('button');
    generateButton.innerText = 'Generate';
    generateButton.addEventListener('click', () => this.renderFigures());
    container.appendChild(generateButton);

    let clearButton = document.createElement('button');
    clearButton.innerText = 'Clean';
    clearButton.addEventListener('click', () => this.canvasWrapper.clear());
    container.appendChild(clearButton);

    document.body.appendChild(container);
  }

  /**
   * Draws a random figure on the canvas.
   */
  private drawRandomFigure(): void {
    const FIGURE_TYPE = Math.floor(Math.random() * 8);
    let position = new Position();
    position.setRandomPosition(this.canvasWrapper.canvas);
    let style = new Style();
    style.setRandomStyle();

    let config = {
      position,
      style,
      canvasWrapper: this.canvasWrapper
    };
    
    let figure = FigureFactory.createFigure(FIGURE_TYPE, config);
    figure.draw();
  }

}

/**
 * Interface to configure a figure.
 */
interface FigureConfig {
  position: Position;
  style: Style;
  canvasWrapper: CanvasWrapper;
}

/**
 * Returns a random number between min and max.
 * @param {number} min - The minimum value of the random number.
 * @param {number} max - The maximum value of the random number.
 * @returns {number} - The random number.
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Factory class to create figures.
 */
class FigureFactory {
  static createFigure(figureType: number, config: FigureConfig): Figure {
    let RADIUS = getRandomNumber(20, 100);
    let BIG_RADIUS = getRandomNumber(50, 200);
    let LENGTH = getRandomNumber(30, 200);
    let HEIGHT = getRandomNumber(30, 200);
    switch (figureType) {
      case 0: return new Rectangle(LENGTH, HEIGHT, config.position, config.style, config.canvasWrapper);
      case 1: return new Circle(RADIUS, config.position, config.style, config.canvasWrapper);
      case 2: return new Triangle(RADIUS, config.position, config.style, config.canvasWrapper);
      case 3: return new Pentagon(RADIUS, config.position, config.style, config.canvasWrapper);
      case 4: return new Square(LENGTH, config.position, config.style, config.canvasWrapper);
      case 5: return new Ellipse(LENGTH, HEIGHT, config.position, config.style, config.canvasWrapper);
      case 6: return new Star(5, BIG_RADIUS, RADIUS, config.position, config.style, config.canvasWrapper);
      case 7: return new Heart(RADIUS, config.position, config.style, config.canvasWrapper);
      default: throw new Error("Invalid figure type");
    }
  }
}