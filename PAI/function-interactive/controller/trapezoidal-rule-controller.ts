/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Trapezoidal rule controller
 * @details Controller
 *            ----> Intermediary between the model and the view
 *            ----> Receives user interactions through the view
 *            ----> Processes these interactions (requests to the model)
 *            ----> Updates the view
 */

import { TrapezoidalRuleModel } from '../model/trapezoidal-rule-model';
import { TrapezoidalRuleView } from '../view/trapezoidal-rule-view';

class TrapezoidalRuleController {
  private model: TrapezoidalRuleModel;
  private view: TrapezoidalRuleView;

  /**
   * @desc Constructor of the class
   * @param model - The model to be used
   * @param view - The view to be used
   */
  constructor(model: TrapezoidalRuleModel, view: TrapezoidalRuleView) {
    this.model = model;
    this.view = view;
    this.init();
  }

  /**
   * @desc Method to initialize the controller
   */
  public init(): void {
    this.view.draw(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd());
    this.view.addBindingToUpdate(() => {
      this.updateModel();
      this.view.draw(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd());
    });
  }

  /**
   * @desc Method to update the model from the inputs
   */
  public updateModel(): void {
    this.model.setExpression(this.view.getExpressionInput().value);
    this.model.setNumberOfTrapezoids(parseInt(this.view.getNumberOfTrapezoidsInput().value));
    this.model.setStart(parseFloat(this.view.getStartInput().value));
    this.model.setEnd(parseFloat(this.view.getEndInput().value));
  }
}

export { TrapezoidalRuleController };