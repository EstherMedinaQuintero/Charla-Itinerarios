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

import { LissajousCurve } from './lissajous-curve.js';
import { ToggleButton } from './button.js';

class AnimationController {
  private intervalId: number | null = null;
  private toggleButton: ToggleButton;
  private intervalMs: number;
  private readonly lissajousCurve: LissajousCurve;
  private readonly renderCallback: () => void;

  /**
   * @desc Crea un controlador de la animación.
   * @param lissajousCurve La curva de Lissajous.
   * @param renderCallback La función de renderizado.
   * @param intervalMs El intervalo de tiempo en milisegundos.
   */
  constructor(lissajousCurve: LissajousCurve, renderCallback: () => void, intervalMs: number = 100) {
    this.lissajousCurve = lissajousCurve;
    this.renderCallback = renderCallback;
    this.intervalMs = intervalMs;
    let toggleButtonElement = document.getElementById('animation-toggle') as HTMLInputElement;
    this.toggleButton = new ToggleButton(toggleButtonElement); 
    this.initToggleButtonListener();
    this.start();
  }

  /**
   * @desc Inicia la animación.
   */
  public start(): void {
    if (this.intervalId === null) {
      this.intervalId = window.setInterval(() => {
        let newPhi = parseFloat(((this.lissajousCurve.getPhi() + 0.01) % 2).toFixed(2));
        this.lissajousCurve.setPhi(newPhi);
        let phiInput = document.getElementById('phi-slider') as HTMLInputElement;
        phiInput.value = this.lissajousCurve.getPhi().toString();
        let phiValue = document.getElementById('phi-input') as HTMLInputElement;
        phiValue.value = this.lissajousCurve.getPhi().toString();
        this.renderCallback();
      }, this.intervalMs);
    }
  }

  /**
   * @desc Detiene la animación.
   */
  public stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * @desc Establece el intervalo de tiempo.
   * @param intervalMs El intervalo de tiempo en milisegundos. 
   */
  public setInterval(intervalMs: number): void {
    this.intervalMs = intervalMs;
    if (this.intervalId !== null) {
      this.stop();
      this.start();
    }
  }

  /**
   * @desc Inicializa el listener del botón de toggle.
   */
  private initToggleButtonListener(): void {
    this.toggleButton.getButton().addEventListener('click', () => {
      if (this.intervalId === null) {
        this.start();
      } else {
        this.stop();
      }
    });
  }
}

export { AnimationController };
