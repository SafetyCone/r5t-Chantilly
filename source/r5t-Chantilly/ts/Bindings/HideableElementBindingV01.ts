import { ValueChangedNotifier } from "r5t-Arbois";

import { IElementShowHideStylerV01 } from "../Stylers/Interfaces/IElementShowHideStylerV01";

export class HideableElementBindingV01
{
    constructor(
        public readonly Element: HTMLElement,
        public readonly ShowElementValue: ValueChangedNotifier<boolean>,
        private readonly Styler: IElementShowHideStylerV01)
    {
        this.ShowElementValue.OnValueChanged.subscribe((value) => this.OnShowHideValueChanged(value));
    }

    private OnShowHideValueChanged(value: boolean)
    {
        if(value)
        {
            this.Styler.ShowElement(this.Element);
        }
        else
        {
            this.Styler.HideElement(this.Element);
        }
    }
}