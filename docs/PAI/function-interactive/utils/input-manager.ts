/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Input manager to simplify the access to the inputs
 */

class InputManager {
  private inputs: Map<string, HTMLInputElement>;

  /**
   * @desc Constructor of the class
   * @details It sets the inputs directly from the HTML
   */
  constructor() {
    this.inputs = new Map();
    this.inputs.set('expression', document.getElementById('expression-input') as HTMLInputElement);
    this.inputs.set('numberOfTrapezoids', document.getElementById('number-of-trapezoids-input') as HTMLInputElement);
    this.inputs.set('start', document.getElementById('start-input') as HTMLInputElement);
    this.inputs.set('end', document.getElementById('end-input') as HTMLInputElement);
  }

  /**
   * @desc Getter of an input
   * @param inputName - The name of the input
   * @return The input with that name
   */
  public getInput(inputName: string): HTMLInputElement {
    if (!this.inputs.has(inputName)) {
      throw new Error(`Input not found: ${inputName}`);
    }
    return this.inputs.get(inputName)!;
  }
}

export { InputManager };