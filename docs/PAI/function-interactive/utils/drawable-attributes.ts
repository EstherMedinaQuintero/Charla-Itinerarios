/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Esther M. Quintero
 * @date April 20, 2024
 * @description Drawable attributes to simplify the creation of drawable objects
 */

class DrawableAttributes {
  private attributes: [string, any][] = [];

  /**
   * @desc Adds an attribute (name - value) to the list of attributes
   * @param attribute - The name of the attribute
   * @param value - The value of the attribute
   */
  public addAttribute(attribute: string, value: any): void {
    this.attributes.push([attribute, value]);
  }

  /**
   * @desc Getter of all the attributes
   * @return The attributes
   */
  public getAttributes(): [string, any][] {
    return this.attributes;
  }

  /**
   * @desc Getter of the value of an attribute
   * @param attribute - The name of the attribute
   * @return The value of the attribute
   */
  public getAttribute(attribute: string): any {
    for (let i = 0; i < this.attributes.length; i++) {
      if (this.attributes[i][0] === attribute) {
        return this.attributes[i][1];
      }
    }
    console.log('Attribute not found');
  }

}

export { DrawableAttributes };