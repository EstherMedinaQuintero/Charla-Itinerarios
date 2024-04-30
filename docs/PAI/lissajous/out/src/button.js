/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar un botón
 */
class ToggleButton {
    /**
     * @desc Constructor de Button.
     * @param button Botón en el DOM.
     */
    constructor(button) {
        this.button = button;
    }
    /// Getters y setters
    getButton() { return this.button; }
    setButton(button) { this.button = button; }
}
export { ToggleButton };
