import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
import '@spectrum/sp-button';
export default function template() {
    const classes = {
        'spectrum-Stepper--quiet': this.quiet,
        'is-invalid': this.invalid,
        'is-focused': this.focused,
    };
    let actionButton_quiet = '';
    let textField_quiet = '';
    if (this.quiet) {
        actionButton_quiet = 'spectrum-ActionButton--quiet';
        textField_quiet = 'spectrum-Textfield--quiet';
    }
    return html `
    <div class="spectrum-Stepper ${classMap(classes)}">
        <input id="stepinput" type="number" class="spectrum-Textfield ${textField_quiet} spectrum-Stepper-input" placeholder=${this.placeholder} value=${this.value} min=${this.min} max=${this.max} step=${this.step} ?disabled=${this.disabled} @change="${this._handleValueChange}" @keypress="${this._handleEnterKeyPress}">
        <span class="spectrum-Stepper-buttons">
        <button class="spectrum-ActionButton ${actionButton_quiet} spectrum-Stepper-stepUp" tabindex="-1" @click="${this._handleUpClick}">
            <sp-icon name="ChevronUpSmall" class="spectrum-Stepper-stepUpIcon"></sp-icon>
        </button>
        <button class="spectrum-ActionButton ${actionButton_quiet} spectrum-Stepper-stepDown" tabindex="-1" @click="${this._handleDownClick}">
            <sp-icon name="ChevronDownSmall" class="spectrum-Stepper-stepDownIcon"></sp-icon>
        </button>
        </span>
    </div>
    `;
}
//# sourceMappingURL=stepper.template.js.map