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
  private slider: Slider;
  private input: Input;

  /**
   * @desc Crea un parámetro.
   * @param slider Elemento del slider.
   * @param input Elemento del input.
   */
  constructor(slider: HTMLInputElement, input: HTMLInputElement) {
    this.slider = new Slider(slider);
    this.input = new Input(input);
  }

  /// Getters y setters
  public getSlider(): HTMLInputElement { return this.slider.get(); }
  public getInput(): HTMLInputElement { return this.input.get(); }
  public setSlider(slider: HTMLInputElement): void { this.slider.set(slider); }
  public setInput(input: HTMLInputElement): void { this.input.set(input); }

}

export { Parameter };