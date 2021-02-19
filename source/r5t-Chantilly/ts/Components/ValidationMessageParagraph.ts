import { HtmlElementHelper } from "r5t-Avignon/Index";
import { IValidationMessageParagraphStyler } from "../Stylers/Interfaces/IValidationMessageParagraphStyler";

/**
 * This is a paragraph that displays colored text in the context of a validation.
 * Think a message in gray text for valid, a different message in red text for invalid.
 */
export class ValidationMessageParagraph
{
    private zIsValid: boolean;
    public get IsValid()
    {
        return this.zIsValid;
    }

    private zMessage: string;
    public get Message()
    {
        return this.zMessage;
    }


    constructor(
        readonly Paragraph: HTMLParagraphElement,
        readonly Styler: IValidationMessageParagraphStyler)
    {
    }

    public SetMessage(message: string, isValid: boolean)
    {
        this.SetMessageValue(message);
        this.SetIsValid(isValid);
    }

    private SetIsValid(value: boolean)
    {
        this.zIsValid = value;

        this.Styler.StyleParagraph(this.Paragraph, this.IsValid);
    }

    private SetMessageValue(message: string)
    {
        HtmlElementHelper.SetContent(this.Paragraph, message);
    }
}