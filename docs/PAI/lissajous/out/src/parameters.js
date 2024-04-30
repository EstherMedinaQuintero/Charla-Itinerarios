/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar un parámetro
 */
import { Slider } from './slider.js';
import { Input } from './input.js';
class Parameter {
    /**
     * @desc Crea un parámetro.
     * @param slider Elemento del slider.
     * @param input Elemento del input.
     */
    constructor(slider, input) {
        this.slider = new Slider(slider);
        this.input = new Input(input);
    }
    /// Getters y setters
    getSlider() { return this.slider.get(); }
    getInput() { return this.input.get(); }
    setSlider(slider) { this.slider.set(slider); }
    setInput(input) { this.input.set(input); }
}
export { Parameter };
