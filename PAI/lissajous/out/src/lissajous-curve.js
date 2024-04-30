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
class LissajousCurve {
    constructor() {
        this.amplitudeA = 200;
        this.amplitudeB = 200;
        this.horizontalLobes = 7;
        this.verticalLobes = 6;
        this.phi = 0;
    }
    /**
     * @desc Devuelve el punto de la curva de Lissajous en función de t.
     * @param tValue Valor de t (tiempo).
     * @returns Punto de la curva de Lissajous.
     */
    getPoint(tValue) {
        let xCoord = this.amplitudeA * Math.sin(this.horizontalLobes * tValue + this.phi);
        let yCoord = this.amplitudeB * Math.sin(this.verticalLobes * tValue);
        return { xCoord, yCoord };
    }
    /**
     * @desc Dibuja la curva de Lissajous en el canvas.
     * @param context Contexto del canvas.
     * @param scaleX La escala en el eje x.
     * @param scaleY La escala en el eje y.
     */
    draw(context, scaleX, scaleY) {
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
    setHorizontalLobes(lobes) { this.horizontalLobes = lobes; }
    setVerticalLobes(lobes) { this.verticalLobes = lobes; }
    setPhi(phi) { this.phi = phi; }
    setAmplitudeA(amplitude) { this.amplitudeA = amplitude; }
    setAmplitudeB(amplitude) { this.amplitudeB = amplitude; }
    /// Getters
    getPhi() { return this.phi; }
    /**
     * @desc Transforma el valor de la función en el eje X del canvas.
     * @param value Valor del eje X del canvas.
     */
    transformX(value, width, scale) {
        let centerX = width / 2;
        return centerX + value * scale;
    }
    /**
     * @desc Transforma el valor de la función en el eje Y del canvas.
     * @param value Valor del eje Y del canvas.
     */
    transformY(value, height, scale) {
        let centerY = height / 2;
        return centerY - value * scale;
    }
}
export { LissajousCurve };
