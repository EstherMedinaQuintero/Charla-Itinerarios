/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase LissajousAnimation
 */
import { LissajousCurve } from './lissajous-curve.js';
import { AnimationController } from './animation-controller.js';
import { ParameterHandler } from './parameter-handler.js';
import { CanvasRender } from './canvas-render.js';
class LissajousAnimation {
    /**
     * @desc Constructor de la clase LissajousAnimation.
     * @param canvasId ID del elemento canvas en el DOM.
     */
    constructor(canvasId) {
        let lissajousCurve = new LissajousCurve();
        this.canvasRender = new CanvasRender(canvasId, lissajousCurve);
        this.render = () => {
            this.canvasRender.render();
        };
        this.parameterHandler = new ParameterHandler(lissajousCurve, this.render);
        this.animationController = new AnimationController(lissajousCurve, this.render);
    }
}
export { LissajousAnimation };
