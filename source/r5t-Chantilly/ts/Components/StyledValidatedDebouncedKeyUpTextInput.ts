import { DebouncedValueChangedNotifier, KeyUpHTMLInputElement, SignalDebouncer, ValueValidatedNotifier } from "r5t-Arbois";
import { SynchronousValidator, ValidationResult } from "r5t-Avignon";

import { ISuccessFailureStylerV02 } from "../Stylers/Interfaces/ISuccessFailureStylerV02";

/**
 * Performs an invalid-or-neutral styling on an element.
 */
export class StyledValidatedDebouncedKeyUpTextInput
{
    protected readonly KeyUpHTMLInputElement: KeyUpHTMLInputElement;
    protected readonly Debouncer: DebouncedValueChangedNotifier<string>;
    protected readonly Validator: ValueValidatedNotifier<string>;


    constructor(
        public readonly HtmlTextInputElement: HTMLInputElement,
        stringValidator: SynchronousValidator<string>,
        protected readonly SuccessFailureStyler: ISuccessFailureStylerV02,
        timeoutMilliseconds = SignalDebouncer.DefaultTimeoutMilliseconds,
    )
    {
        this.KeyUpHTMLInputElement = new KeyUpHTMLInputElement(this.HtmlTextInputElement);
        this.Debouncer = new DebouncedValueChangedNotifier(this.KeyUpHTMLInputElement, timeoutMilliseconds);
        this.Validator = new ValueValidatedNotifier(this.Debouncer, stringValidator);

        this.Attach();
    }

    protected Attach()
    {
        this.Validator.OnValidation.subscribe((validationResult) => this.OnValidationHandler(validationResult));
    }

    protected OnValidationHandler(validationResult: ValidationResult)
    {
        if(validationResult.IsValid)
        {
            // Reset to neutral.
            this.SuccessFailureStyler.Neutral(this.HtmlTextInputElement);
        }
        else
        {
            // Mark failure.
            this.SuccessFailureStyler.Failure(this.HtmlTextInputElement);
        }
    }
}