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
  button: HTMLInputElement;

  /**
   * @desc Constructor de Button.
   * @param button Botón en el DOM.
   */
  constructor(button: HTMLInputElement) {
    this.button = button;
  }

  /// Getters y setters
  public getButton(): HTMLInputElement { return this.button; }
  public setButton(button: HTMLInputElement): void { this.button = button; }
}

export { ToggleButton };