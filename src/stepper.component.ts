import { customElement, property, query, queryAll } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import stepperStyles from './stepper.styles';
import template from './stepper.template';

import { Button } from '@spectrum/sp-button';
import { Textfield } from '@spectrum/sp-textfield';

@customElement('sp-stepper')
export class Stepper extends Base {
  public static componentStyles = [ Button.componentStyles, Textfield.componentStyles, stepperStyles ];

  @query('#stepinput') stepInput: HTMLInputElement;

  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) focused = false;
  @property({ type: Boolean }) invalid = false;
  @property({ type: String }) placeholder = "Enter a number";
  @property({ type: String }) value = "";
  @property({ type: String }) min = "-2";
  @property({ type: String }) max = "2";
  @property({ type: String }) step = "0.5";

  _handleValueChange(e) {
    let changedEvent = new CustomEvent('changed', {
      detail: {
        priority: this.stepInput.value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changedEvent);
  }

  _handleUpClick(e) {
    var newValue = +this.stepInput.value;
    newValue = newValue + Number(this.step);
    this.stepInput.value = String(newValue);
    this._handleValueChange(e);
  }

  _handleDownClick(e) {
    var newValue = +this.stepInput.value;
    newValue = newValue - Number(this.step);
    this.stepInput.value = String(newValue);
    this._handleValueChange(e);
  }


  _handleEnterKeyPress(e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      let changedEvent = new CustomEvent('enterkeypress', {
        detail: {
          priority: this.stepInput.value
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(changedEvent);
    }
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-stepper': Stepper;
  }
}
