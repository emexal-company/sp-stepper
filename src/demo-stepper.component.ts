import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-stepper.styles';
import template from './demo-stepper.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Stepper } from '@spectrum/sp-stepper';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-stepper')
export class DemoStepper extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-stepper': DemoStepper;
  }
}
