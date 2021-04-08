import { IElementShowHideStylerV02 } from "../Interfaces/IElementShowHideStylerV02";

export class IElementShowHideStylerV02Extensions
{
    public static async ShowOrHideElement(styler: IElementShowHideStylerV02, element: HTMLElement, showOrHide: boolean)
    {
        if(showOrHide)
        {
            return styler.Show(element);
        }
        else
        {
            return styler.Hide(element);
        }
    }
}