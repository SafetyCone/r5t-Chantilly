import { ValidatedTextInputBase } from "r5t-Arbois/Index";

import { ValidationResult } from "r5t-Avignon/Index";

/**
 * A text input component base class that allows derived classes to style the text input (allowing a choice of CSS frameworks, Tailwind for example).
 */
export abstract class ValidationStyledTextInputBase extends ValidatedTextInputBase
{
    constructor(
        readonly TextInput: HTMLInputElement,
        readonly Validator: (value: string) => Promise<ValidationResult>,
        readonly Event: keyof HTMLElementEventMap = "change")
    {
        super(TextInput, Validator, Event);
    }

    protected abstract StyleTextInput(textInput: HTMLInputElement, isValid: boolean): void;

    protected HandleValidationResult(validationResult: ValidationResult)
    {
        super.HandleValidationResult(validationResult);

        this.StyleTextInput(this.TextInput, validationResult.IsValid);
    }
}