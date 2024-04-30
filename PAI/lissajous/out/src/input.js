/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar un input
 */
class Input {
    /**
     * @desc Crea un slider.
     * @param input Elemento del input.
     */
    constructor(input) {
        this.input = input;
    }
    /// Getters y setters
    get() { return this.input; }
    set(input) { this.input = input; }
}
export { Input };
