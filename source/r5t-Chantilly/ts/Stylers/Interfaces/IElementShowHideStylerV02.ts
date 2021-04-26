export interface IElementShowHideStylerV02
{
    Show(element: Element): Promise<void>;
    Hide(element: Element): Promise<void>;
}