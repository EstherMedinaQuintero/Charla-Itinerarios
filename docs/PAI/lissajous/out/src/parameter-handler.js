/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Controlador de parámetros
 */
import { Parameter } from './parameters.js';
class ParameterHandler {
    /**
     * @desc Constructor de la clase ParameterHandler.
     * @param lissajousCurve Curva de Lissajous.
     * @param updateCallback Callback de actualización.
     */
    constructor(lissajousCurve, updateCallback) {
        this.lissajousCurve = lissajousCurve;
        this.updateCallback = updateCallback;
        this.parameters = {};
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeParameters());
        }
        else {
            this.initializeParameters();
        }
    }
    /**
     * @desc Inicializa los parámetros.
     */
    initializeParameters() {
        let parameterNames = ['horizontal-lobes', 'vertical-lobes', 'phi', 'amplitude-a', 'amplitude-b'];
        parameterNames.forEach(name => {
            const SLIDER = document.getElementById(`${name}-slider`);
            const INPUT = document.getElementById(`${name}-input`);
            if (!SLIDER || !INPUT) {
                console.error(`Elementos para el parámetro ${name} no encontrados.`);
                return;
            }
            this.parameters[name] = new Parameter(SLIDER, INPUT);
            this.setupListeners(name);
        });
    }
    /**
     * @desc Configura los listeners de los parámetros.
     * @param name Nombre del parámetro.
     * @returns Parámetro.
     */
    setupListeners(name) {
        let parameter = this.parameters[name];
        let methodName = 'set' + name.split('-').map((part, index) => index === 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)).join('');
        let syncValues = () => {
            let newValue = parseFloat(parameter.getSlider().value);
            parameter.getInput().value = parameter.getSlider().value;
            if (typeof (this.lissajousCurve[methodName]) === 'function') {
                this.lissajousCurve[methodName](newValue);
            }
            else {
                console.error(`El método ${methodName} no existe en LissajousCurve.`);
            }
            this.updateCallback();
        };
        parameter.getSlider().addEventListener('input', syncValues);
        parameter.getInput().addEventListener('input', syncValues);
    }
}
export { ParameterHandler };
