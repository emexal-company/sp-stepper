import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import stepperStyles from './stepper.styles';
import template from './stepper.template';
import { Button } from '@spectrum/sp-button';
import { Textfield } from '@spectrum/sp-textfield';
let Stepper = class Stepper extends Base {
    constructor() {
        super(...arguments);
        this.quiet = false;
        this.disabled = false;
        this.focused = false;
        this.invalid = false;
        this.placeholder = "Enter a number";
        this.value = "";
        this.min = "-2";
        this.max = "2";
        this.step = "0.5";
    }
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
    render() {
        return template.call(this);
    }
};
Stepper.componentStyles = [Button.componentStyles, Textfield.componentStyles, stepperStyles];
__decorate([
    query('#stepinput'),
    __metadata("design:type", HTMLInputElement)
], Stepper.prototype, "stepInput", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Stepper.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Stepper.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Stepper.prototype, "focused", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Stepper.prototype, "invalid", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Stepper.prototype, "placeholder", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Stepper.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Stepper.prototype, "min", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Stepper.prototype, "max", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Stepper.prototype, "step", void 0);
Stepper = __decorate([
    customElement('sp-stepper')
], Stepper);
export { Stepper };
//# sourceMappingURL=stepper.component.js.map