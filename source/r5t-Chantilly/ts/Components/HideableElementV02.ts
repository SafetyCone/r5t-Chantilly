import { IElementShowHideStylerV02 } from "../Stylers/Interfaces/IElementShowHideStylerV02";

export class HideableElementV02
{
    constructor(
        public readonly Element: HTMLElement,
        private readonly Styler: IElementShowHideStylerV02,
    )
    {
    }

    public Show(): Promise<void>
    {
        let showing = this.Styler.Show(this.Element);
        return showing;
    }

    public Hide(): Promise<void>
    {
        let hiding = this.Styler.Hide(this.Element);
        return hiding;
    }
}