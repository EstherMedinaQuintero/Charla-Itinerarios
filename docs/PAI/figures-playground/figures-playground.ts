/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @since Mar 10, 2024
 * @description Client program to render figures
 */

import { View } from './view.js';

/**
 * Main function to render figures on the canvas.
 */
const main = function (): void {
  document.addEventListener('DOMContentLoaded', () => {
    const VIEW = new View('Art'); 
    VIEW.renderFigures().then(() => console.log('Figuras dibujadas'));
  });
}

main();
