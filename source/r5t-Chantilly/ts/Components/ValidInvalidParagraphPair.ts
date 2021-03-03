import { IElementShowHideStylerExtensions } from "../Stylers/Extensions/IElementShowHideStylerExtension";
import { IElementShowHideStylerV01 } from "../Stylers/Interfaces/IElementShowHideStylerV01";

/**
 * Hides/Shows a paragraph pair.
 */
export class ValidInvalidParagraphPair
{
    constructor(
        public readonly ValidParagraph: HTMLParagraphElement,
        public readonly InvalidParagraph: HTMLParagraphElement,
        readonly Styler: IElementShowHideStylerV01
    )
    {
    }

    public SetValid(isValid: boolean)
    {
        if(isValid)
        {
            IElementShowHideStylerExtensions.ShowAndHideElements(this.Styler,
                this.ValidParagraph,
                this.InvalidParagraph);
        }
        else
        {
            IElementShowHideStylerExtensions.ShowAndHideElements(this.Styler,
                this.InvalidParagraph,
                this.ValidParagraph);
        }
    }
}