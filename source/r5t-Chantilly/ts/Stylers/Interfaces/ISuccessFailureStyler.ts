export interface ISuccessFailureStyler
{
    Success(element: HTMLElement): Promise<void>;
    Failure(element: HTMLElement): Promise<void>;
}