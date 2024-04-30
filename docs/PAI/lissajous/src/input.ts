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
  private input: HTMLInputElement;

  /**
   * @desc Crea un slider.
   * @param input Elemento del input.
   */
  constructor(input: HTMLInputElement) {
    this.input = input;
  }

  /// Getters y setters
  public get(): HTMLInputElement { return this.input; }
  public set(input: HTMLInputElement): void { this.input = input; }
}

export { Input };