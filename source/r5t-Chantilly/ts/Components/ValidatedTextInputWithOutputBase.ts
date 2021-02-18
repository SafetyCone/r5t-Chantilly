import { ElementSelectorAs, HtmlElementHelper, QuerySelectorHelper, ValidationResult } from "r5t-Avignon/Index";

import { ValidationStyledTextInputBase } from "./ValidationStyledTextInputBase";

/**
 * A text input that validates its value on change.
 * This is paired with the TextInputV01
 */
export abstract class ValidatedTextInputWithOutputBase extends ValidationStyledTextInputBase
{
    public static readonly ValidationMessageElementClassName = "validation-message";
    public static readonly HelperTextElementClassName = "helper-text";


    private ValidationMessageParagraph: HTMLParagraphElement;
    private HelperTextParagraph: HTMLParagraphElement;


    constructor(
        readonly TextInput: HTMLInputElement,
        readonly Validator: (value: string) => Promise<ValidationResult>,
        readonly Event: keyof HTMLElementEventMap = "change",
        wrapperSelector: ElementSelectorAs<HTMLDivElement> = HtmlElementHelper.SelectParentOfParentAs)
    {
        super(TextInput, Validator, Event);

        let wrapperDiv = wrapperSelector(this.TextInput);

        this.Bind(wrapperDiv);
    }

    private Bind(wrapperDiv: HTMLDivElement)
    {
        this.ValidationMessageParagraph = QuerySelectorHelper.GetDescendentElementByClassName(wrapperDiv, ValidatedTextInputWithOutputBase.ValidationMessageElementClassName);
        this.HelperTextParagraph = QuerySelectorHelper.GetDescendentElementByClassName(wrapperDiv, ValidatedTextInputWithOutputBase.HelperTextElementClassName);
    }

    protected HandleValidationResult(validationResult: ValidationResult)
    {
        if(validationResult.IsValid)
        {
            this.ShowElement(this.HelperTextParagraph);
            this.HideElement(this.ValidationMessageParagraph);

            HtmlElementHelper.ClearContent(this.ValidationMessageParagraph);
        }
        else
        {
            this.ShowElement(this.ValidationMessageParagraph);
            this.HideElement(this.HelperTextParagraph);

            HtmlElementHelper.SetContent(this.ValidationMessageParagraph, validationResult.Message);
        }
    }

    protected abstract ShowOrHideElement(element: HTMLElement, showOrHide: boolean): void;

    private ShowElement(element: HTMLElement)
    {
        this.ShowOrHideElement(element, true);
    }

    private HideElement(element: HTMLElement)
    {
        this.ShowOrHideElement(element, false);
    }
}