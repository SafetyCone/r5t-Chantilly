import { CssClassList, HtmlElementHelper, PromiseHelper } from "r5t-Avignon";
import { ISuccessFailureStyler } from "../Interfaces/ISuccessFailureStyler";

/**
 * Works by removing classes in the failure classes list from the element, and adding the classes in the success classes list (and vice-versa).
 */
export class ClassListBasedSuccessFailureStyler implements ISuccessFailureStyler
{
    public static FromClassListString(successClassListString: string, failureClassListString: string): ClassListBasedSuccessFailureStyler
    {
        let successClasses = CssClassList.ClassesFrom(successClassListString);
        let failureClasses = CssClassList.ClassesFrom(failureClassListString);

        let styler = new ClassListBasedSuccessFailureStyler(successClasses, failureClasses);
        return styler;
    }

    constructor(
        private readonly SuccessClasses: string[],
        private readonly FailureClasses: string[]
    )
    {
    }

    Success(element: HTMLElement): Promise<void>
    {
        HtmlElementHelper.AddAndRemoveCssClasses(element, this.SuccessClasses, this.FailureClasses);

        return PromiseHelper.Empty;
    }

    Failure(element: HTMLElement): Promise<void>
    {
        HtmlElementHelper.AddAndRemoveCssClasses(element, this.FailureClasses, this.SuccessClasses);

        return PromiseHelper.Empty;
    }
}