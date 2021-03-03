import { IElementShowHideStylerV01 } from "../Interfaces/IElementShowHideStylerV01";

export class IElementShowHideStylerExtensions
{
    public static ShowOrHideElement(styler: IElementShowHideStylerV01, element: HTMLElement, showOrHide: boolean)
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

    public static ShowAndHideElements(styler: IElementShowHideStylerV01, elementToShow: HTMLElement, elementToHide: HTMLElement)
    {
        styler.ShowElement(elementToShow);
        styler.HideElement(elementToHide);
    }

    public static HideAndShowElements(styler: IElementShowHideStylerV01, elementToHide: HTMLElement, elementToShow: HTMLElement)
    {
        styler.HideElement(elementToHide);
        styler.ShowElement(elementToShow);
    }
}