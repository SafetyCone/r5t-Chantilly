import { IElementShowHideStyler } from "../Interfaces/IElementShowHideStyler";

export class IElementShowHideStylerExtensions
{
    public static ShowOrHideElement(styler: IElementShowHideStyler, element: HTMLElement, showOrHide: boolean)
    {
        if(showOrHide)
        {
            styler.ShowElement(element);
        }
        else
        {
            styler.HideElement(element);
        }
    }

    public static ShowAndHideElements(styler: IElementShowHideStyler, elementToShow: HTMLElement, elementToHide: HTMLElement)
    {
        styler.ShowElement(elementToShow);
        styler.HideElement(elementToHide);
    }

    public static HideAndShowElements(styler: IElementShowHideStyler, elementToHide: HTMLElement, elementToShow: HTMLElement)
    {
        styler.HideElement(elementToHide);
        styler.ShowElement(elementToShow);
    }
}