import { Base } from '@spectrum/sp-base';
export declare class Stepper extends Base {
    static componentStyles: (import("lit-element").CSSResult | import("lit-element").CSSResult[])[];
    stepInput: HTMLInputElement;
    quiet: boolean;
    disabled: boolean;
    focused: boolean;
    invalid: boolean;
    placeholder: string;
    value: string;
    min: string;
    max: string;
    step: string;
    _handleValueChange(e: any): void;
    _handleUpClick(e: any): void;
    _handleDownClick(e: any): void;
    _handleEnterKeyPress(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-stepper': Stepper;
    }
}
