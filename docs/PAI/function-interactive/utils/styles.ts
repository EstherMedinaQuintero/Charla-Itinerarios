/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Styles
 */

const AXES_STYLE = {
  strokeStyle: 'black',
  numLabelsX: 10,
  numLabelsY: 5,
  displacement: 30,
  precission: 2,
}

const DIVISION_STYLE = {
  fillStyle: 'red',
  strokeStyle: 'grey',
  lineDash: [5, 3],
}

const FUNCTION_STYLE = {
  strokeStyle: 'blue',
  lineWidth: 2,
}

const GRID_STYLE = {
  strokeStyle: '#e0e0e0',
  numLabelsX: 10,
  numLabelsY: 5,
}

const RESULT_STYLE = {
  fillStyle: '#000',
  font: '14px Arial',
  textAlign: 'center',
  precission: 4,
}

const TRAPEZOID_STYLE = {
  fillStyle: 'rgba(255, 0, 0, 0.4)',
}

export { 
  AXES_STYLE,
  DIVISION_STYLE,
  FUNCTION_STYLE,
  GRID_STYLE,
  RESULT_STYLE,
  TRAPEZOID_STYLE,
};