import { ElementSelectorAs, HtmlElementHelper, QuerySelectorHelper, ValidationResult } from "r5t-Avignon/Index";

import { IElementShowHideStylerV01 } from "../Stylers/Interfaces/IElementShowHideStylerV01";
import { IValidatedTextInputStyler } from "../Stylers/Interfaces/IValidatedTextInputStyler";
import { ValidatedStyledTextInput } from "./ValidatedStyledTextInput";
import { ValidInvalidParagraphPair } from "./ValidInvalidParagraphPair";

/**
 * A text input that validates its value on change.
 * This is paired with the TextInputV01 in C#.
 */
export class ValidatedTextInputWithOutput extends ValidatedStyledTextInput
{
    public static readonly ValidParagraphElementClassName = "valid-paragraph";
    public static readonly InvalidParagraphElementClassName = "invalid-paragraph";

    private readonly ValidInvalidParagraphPair: ValidInvalidParagraphPair;

    constructor(
        inputElement: HTMLInputElement,
        validator: (value: string) => Promise<ValidationResult>,
        textInputStyler: IValidatedTextInputStyler,
        elementShowHideStyler: IElementShowHideStylerV01,
        event: keyof HTMLElementEventMap = "change",
        wrapperSelector: ElementSelectorAs<HTMLDivElement> = HtmlElementHelper.SelectParentOfParentAs)
    {
        super(inputElement, validator, textInputStyler, event);

        let wrapperDiv = wrapperSelector(this.HtmlElement);

        let validParagraph: HTMLParagraphElement = QuerySelectorHelper.GetDescendentElementByClassName(wrapperDiv, ValidatedTextInputWithOutput.ValidParagraphElementClassName);
        let invalidParagraph: HTMLParagraphElement = QuerySelectorHelper.GetDescendentElementByClassName(wrapperDiv, ValidatedTextInputWithOutput.InvalidParagraphElementClassName);

        this.ValidInvalidParagraphPair = new ValidInvalidParagraphPair(validParagraph, invalidParagraph, elementShowHideStyler);
    }

    protected HandleValidationResult(validationResult: ValidationResult)
    {
        super.HandleValidationResult(validationResult);

        this.ValidInvalidParagraphPair.SetValid(validationResult.IsValid);

        if(validationResult.IsValid)
        {
            HtmlElementHelper.ClearContent(this.ValidInvalidParagraphPair.InvalidParagraph);
        }
        else
        {
            HtmlElementHelper.SetContent(this.ValidInvalidParagraphPair.InvalidParagraph, validationResult.Message);
        }
    }
}