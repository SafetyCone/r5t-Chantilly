import { IElementShowHideStyler } from "../Stylers/Interfaces/IElementShowHideStyler";

export class HideableElement
{
    constructor(
        public readonly Element: HTMLElement,
        private readonly Styler: IElementShowHideStyler,
    )
    {
    }

    public Show()
    {
        this.Styler.ShowElement(this.Element);
    }

    public Hide()
    {
        this.Styler.HideElement(this.Element);
    }
}