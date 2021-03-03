export interface IElementShowHideStylerV02
{
    Show(element: HTMLElement): Promise<void>;
    Hide(element: HTMLElement): Promise<void>;
}