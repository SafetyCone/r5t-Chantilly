/**
 * Synchronous, and adds the ability to reset to neutral.
 */
export interface ISuccessFailureStylerV02
{
    Neutral(element: HTMLElement): void;
    Success(element: HTMLElement): void;
    Failure(element: HTMLElement): void;
}