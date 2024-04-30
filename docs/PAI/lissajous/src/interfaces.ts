/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Interfaces para el modelo.
 */

/**
 * @desc Interfaz para objetos que se pueden dibujar en el canvas.
 */
interface Drawable {
  draw(context: CanvasRenderingContext2D, scaleX: number, scaleY: number): void;
}

export { Drawable };
