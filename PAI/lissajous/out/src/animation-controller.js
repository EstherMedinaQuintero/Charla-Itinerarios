/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Controlador de la animación.
 */
import { ToggleButton } from './button.js';
class AnimationController {
    /**
     * @desc Crea un controlador de la animación.
     * @param lissajousCurve La curva de Lissajous.
     * @param renderCallback La función de renderizado.
     * @param intervalMs El intervalo de tiempo en milisegundos.
     */
    constructor(lissajousCurve, renderCallback, intervalMs = 100) {
        this.intervalId = null;
        this.lissajousCurve = lissajousCurve;
        this.renderCallback = renderCallback;
        this.intervalMs = intervalMs;
        let toggleButtonElement = document.getElementById('animation-toggle');
        this.toggleButton = new ToggleButton(toggleButtonElement);
        this.initToggleButtonListener();
        this.start();
    }
    /**
     * @desc Inicia la animación.
     */
    start() {
        if (this.intervalId === null) {
            this.intervalId = window.setInterval(() => {
                let newPhi = parseFloat(((this.lissajousCurve.getPhi() + 0.01) % 2).toFixed(2));
                this.lissajousCurve.setPhi(newPhi);
                let phiInput = document.getElementById('phi-slider');
                phiInput.value = this.lissajousCurve.getPhi().toString();
                let phiValue = document.getElementById('phi-input');
                phiValue.value = this.lissajousCurve.getPhi().toString();
                this.renderCallback();
            }, this.intervalMs);
        }
    }
    /**
     * @desc Detiene la animación.
     */
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    /**
     * @desc Establece el intervalo de tiempo.
     * @param intervalMs El intervalo de tiempo en milisegundos.
     */
    setInterval(intervalMs) {
        this.intervalMs = intervalMs;
        if (this.intervalId !== null) {
            this.stop();
            this.start();
        }
    }
    /**
     * @desc Inicializa el listener del botón de toggle.
     */
    initToggleButtonListener() {
        this.toggleButton.getButton().addEventListener('click', () => {
            if (this.intervalId === null) {
                this.start();
            }
            else {
                this.stop();
            }
        });
    }
}
export { AnimationController };
