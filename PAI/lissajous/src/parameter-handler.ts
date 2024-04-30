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
import { LissajousCurve } from './lissajous-curve.js';

class ParameterHandler {
  private parameters: { [key: string]: Parameter } = {};

  /**
   * @desc Constructor de la clase ParameterHandler.
   * @param lissajousCurve Curva de Lissajous.
   * @param updateCallback Callback de actualización.
   */
  constructor(private lissajousCurve: LissajousCurve, private updateCallback: () => void) {
    if (document.readyState === 'loading') {  
      document.addEventListener('DOMContentLoaded', () => this.initializeParameters());
    } else {  
      this.initializeParameters();
    }
  }

  /**
   * @desc Inicializa los parámetros.
   */
  private initializeParameters(): void {
    let parameterNames = ['horizontal-lobes', 'vertical-lobes', 'phi', 'amplitude-a', 'amplitude-b'];
    parameterNames.forEach(name => {
      const SLIDER = document.getElementById(`${name}-slider`) as HTMLInputElement;
      const INPUT = document.getElementById(`${name}-input`) as HTMLInputElement;
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
  private setupListeners(name: string): void {
    let parameter = this.parameters[name];
    let methodName = 'set' + name.split('-').map((part, index) => 
      index === 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    let syncValues = () => {
      let newValue = parseFloat(parameter.getSlider().value);
      parameter.getInput().value = parameter.getSlider().value;
      type LissajousCurveMethods = 'setHorizontalLobes' | 'setVerticalLobes' | 'setPhi' | 'setAmplitudeA' | 'setAmplitudeB';
      if (typeof (this.lissajousCurve[methodName as LissajousCurveMethods]) === 'function') {
        (this.lissajousCurve[methodName as LissajousCurveMethods] as (value: number) => void)(newValue);
      } else {
        console.error(`El método ${methodName} no existe en LissajousCurve.`);
      }
      this.updateCallback();
    };
    parameter.getSlider().addEventListener('input', syncValues);
    parameter.getInput().addEventListener('input', syncValues);
  }
}

export { ParameterHandler };
