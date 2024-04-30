/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Trapezoidal rule
 */

import { TrapezoidalRuleModel } from './model/trapezoidal-rule-model';
import { TrapezoidalRuleView } from './view/trapezoidal-rule-view';
import { TrapezoidalRuleController } from './controller/trapezoidal-rule-controller';

function main() {
  let model = new TrapezoidalRuleModel();
  let view = new TrapezoidalRuleView();
  let controller = new TrapezoidalRuleController(model, view);
  controller.init();
}

main();