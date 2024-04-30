/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar un slider
 */
class Slider {
    /**
     * @desc Crea un slider.
     * @param slider Elemento del slider.
     * @param input Elemento del input.
     */
    constructor(slider) {
        this.slider = slider;
    }
    /// Getters y setters
    get() { return this.slider; }
    set(slider) { this.slider = slider; }
}
export { Slider };
