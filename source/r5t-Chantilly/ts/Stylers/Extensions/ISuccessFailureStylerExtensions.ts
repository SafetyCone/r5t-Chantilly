import { ISuccessFailureStyler } from "../Interfaces/ISuccessFailureStyler";

export class ISuccessFailureStylerExtensions
{
    public static Style(styler: ISuccessFailureStyler,
        element: HTMLElement,
        success: boolean) : Promise<void>
    {
        if(success)
        {
            return styler.Success(element);
        }
        else
        {
            return styler.Failure(element);
        }
    }
}