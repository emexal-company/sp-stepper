import { html } from 'lit-element';
import { DemoStepper } from './demo-stepper.component';

import '@spectrum/sp-stepper';
import '@spectrum/sp-container';


export default function template(this: DemoStepper) {
  return html`
  <sp-container>
      <sp-rule medium label="Stepper - Standard"></sp-rule>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="0.5"></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" focused></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" invalid></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" disabled></sp-stepper></pre>
      </sp-demo>
      
      <sp-rule medium label="Stepper - Quiet"></sp-rule>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" quiet></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" quiet focused></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" quiet invalid></sp-stepper></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-stepper min="-10" max="10" step="1" quiet disabled></sp-stepper></pre>
      </sp-demo>
    </sp-container>
  `;
}
