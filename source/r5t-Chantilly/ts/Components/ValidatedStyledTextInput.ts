import { ValidatedTextInput } from "r5t-Arbois/Index";

import { ValidationResult } from "r5t-Avignon/Index";
import { IValidatedTextInputStyler } from "../Stylers/Interfaces/IValidatedTextInputStyler";

/**
 * A text input component base class that allows derived classes to style the text input (allowing a choice of CSS frameworks, Tailwind for example).
 */
export class ValidatedStyledTextInput extends ValidatedTextInput
{
    constructor(
        textInput: HTMLInputElement,
        validator: (value: string) => Promise<ValidationResult>,
        protected readonly Styler: IValidatedTextInputStyler,
        readonly event: keyof HTMLElementEventMap = "change")
    {
        super(textInput, validator, event);
    }

    protected HandleValidationResult(validationResult: ValidationResult)
    {
        super.HandleValidationResult(validationResult);

        this.Styler.StyleTextInput(this.HtmlElement, validationResult.IsValid);
    }
}