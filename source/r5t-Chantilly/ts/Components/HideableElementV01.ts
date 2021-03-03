import { IElementShowHideStylerV01 } from "../Stylers/Interfaces/IElementShowHideStylerV01";

export class HideableElementV01
{
    constructor(
        public readonly Element: HTMLElement,
        private readonly Styler: IElementShowHideStylerV01,
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