/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Renderizador de la animación en el canvas.
 */

import { LissajousCurve } from './lissajous-curve.js';
import { Grid } from './grid.js';

class CanvasRender {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private lissajousCurve: LissajousCurve;
  private scaleX: number;
  private scaleY: number;
  private grid: Grid;

  /**
   * @desc Constructor de CanvasRender.
   * @param canvasId ID del elemento canvas en el DOM.
   * @param lissajousCurve Instancia de LissajousCurve a renderizar.
   * @param scaleX Factor de escala en el eje X.
   * @param scaleY Factor de escala en el eje Y.
   */
  constructor(canvasId: string, lissajousCurve: LissajousCurve, scaleX: number = 1, scaleY: number = 1) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error('Canvas element not found.');
    }
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get canvas rendering context.');
    }
    this.context = context;
    this.lissajousCurve = lissajousCurve;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.grid = new Grid();
  }

  /**
   * @desc Limpia el canvas.
   */
  private clearCanvas(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @desc Dibuja en el canvas.
   */
  public render(): void {
    this.clearCanvas(); /// Limpia el canvas antes de dibujar un nuevo frame
    this.lissajousCurve.draw(this.context, this.scaleX, this.scaleY);
    this.grid.draw(this.context, this.scaleX, this.scaleY);
  }
}

export { CanvasRender };