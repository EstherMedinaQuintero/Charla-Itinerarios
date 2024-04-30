/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Clase para representar la curva de Lissajous.
 */

import { lissajousStyle } from "./style.js";
import { Drawable } from "./interfaces.js";

class LissajousCurve implements Drawable {    
  private amplitudeA: number = 200;
  private amplitudeB: number = 200;
  private horizontalLobes: number = 7;
  private verticalLobes: number = 6;
  private phi: number = 0;

  /**
   * @desc Devuelve el punto de la curva de Lissajous en función de t.
   * @param tValue Valor de t (tiempo).
   * @returns Punto de la curva de Lissajous.
   */
  public getPoint(tValue: number): {xCoord: number, yCoord: number} {
    let xCoord = this.amplitudeA * Math.sin(this.horizontalLobes * tValue + this.phi) as number;
    let yCoord = this.amplitudeB * Math.sin(this.verticalLobes * tValue) as number;
    return {xCoord, yCoord};
  }

  /**
   * @desc Dibuja la curva de Lissajous en el canvas.
   * @param context Contexto del canvas.
   * @param scaleX La escala en el eje x.
   * @param scaleY La escala en el eje y.
   */
  public draw(context: CanvasRenderingContext2D, scaleX: number, scaleY: number): void {
    const WIDTH = context.canvas.width;
    const HEIGHT = context.canvas.height;
    context.strokeStyle = lissajousStyle.strokeStyle;
    context.lineWidth = lissajousStyle.lineWidth;
    context.beginPath();
    for (let time = 0; time <= 2 * Math.PI; time += lissajousStyle.step) {
      let point = this.getPoint(time);
      let canvasX = this.transformX(point.xCoord, WIDTH, scaleX);
      let canvasY = this.transformY(point.yCoord, HEIGHT, scaleY);
      context.lineTo(canvasX, canvasY);
    }
    context.stroke();
  }

  /// Setters
  public setHorizontalLobes(lobes: number): void { this.horizontalLobes = lobes; }
  public setVerticalLobes(lobes: number): void { this.verticalLobes = lobes; }
  public setPhi(phi: number): void { this.phi = phi; }
  public setAmplitudeA(amplitude: number): void { this.amplitudeA = amplitude; }
  public setAmplitudeB(amplitude: number): void { this.amplitudeB = amplitude; }

  /// Getters
  public getPhi(): number { return this.phi;}

  /**
   * @desc Transforma el valor de la función en el eje X del canvas.
   * @param value Valor del eje X del canvas.
   */
  private transformX(value: number, width: number, scale: number): number {
    let centerX = width / 2;
    return centerX + value * scale;
  }

  /**
   * @desc Transforma el valor de la función en el eje Y del canvas.
   * @param value Valor del eje Y del canvas.
   */
  private transformY(value: number, height: number, scale: number): number {
    let centerY = height / 2;
    return centerY - value * scale;
  }

}
  
export { LissajousCurve };