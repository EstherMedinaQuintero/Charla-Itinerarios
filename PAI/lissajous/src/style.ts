/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date Mar 15, 2024
 * @description Estilos para dibujar
 */

import { COLORS } from "./colors.js";

/**
 * @desc Estilo para dibujar la curva de Lissajous.
 */
const lissajousStyle = {
  lineWidth: 1,
  strokeStyle: COLORS.myBlack,
  step: 0.001,
}

/**
 * @desc Estilo para dibujar la cuadrícula.
 */
const gridStyle = {
  strokeStyle: COLORS.myGrey,
  lineWidth: 0.1,
  majorLineWidth: 0.4,
  interval: 10,
  majorInterval: 100,
}

export { lissajousStyle, gridStyle };