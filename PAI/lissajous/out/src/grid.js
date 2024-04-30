/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar la cuadrícula.
 */
import { gridStyle } from './style.js';
class Grid {
    /**
     * @desc Dibuja la cuadrícula en el canvas.
     * @param context Contexto del canvas.
     * @param scaleX La escala en el eje x.
     * @param scaleY La escala en el eje y.
     */
    draw(context, scaleX, scaleY) {
        let width = context.canvas.width;
        let height = context.canvas.height;
        context.strokeStyle = gridStyle.strokeStyle;
        /// Líneas verticales
        for (let linePos = 0; linePos <= width; linePos += gridStyle.interval) {
            context.beginPath();
            if (linePos % gridStyle.majorInterval === 0) {
                context.lineWidth = gridStyle.majorLineWidth;
            }
            else {
                context.lineWidth = gridStyle.lineWidth;
            }
            context.moveTo(linePos, 0);
            context.lineTo(linePos, height);
            context.stroke();
        }
        /// Líneas horizontales
        for (let linePos = 0; linePos <= height; linePos += gridStyle.interval) {
            context.beginPath();
            if (linePos % gridStyle.majorInterval === 0) {
                context.lineWidth = gridStyle.majorLineWidth;
            }
            else {
                context.lineWidth = gridStyle.lineWidth;
            }
            context.moveTo(0, linePos);
            context.lineTo(width, linePos);
            context.stroke();
        }
    }
}
export { Grid };
