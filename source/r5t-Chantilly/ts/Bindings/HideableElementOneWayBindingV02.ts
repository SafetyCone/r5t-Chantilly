import { ObservableValue } from "r5t-Arbois";

import { IElementShowHideStylerV02 } from "../Stylers/Interfaces/IElementShowHideStylerV02";

/**
 * One-way binding from observable value to element.
 */
export class HideableElementOneWayBindingV02
{
    constructor(
        public readonly Element: HTMLElement,
        public readonly ShowElementValue: ObservableValue<boolean>,
        private readonly Styler: IElementShowHideStylerV02)
    {
        this.ShowElementValue.OnSet.subscribe((value) => this.OnShowElementSet(value));
    }

    private OnShowElementSet(value: boolean)
    {
        if(value)
        {
            this.Styler.Show(this.Element);
        }
        else
        {
            this.Styler.Hide(this.Element);
        }
    }
}