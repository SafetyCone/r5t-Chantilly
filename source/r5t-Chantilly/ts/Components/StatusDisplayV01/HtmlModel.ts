import { QuerySelectorHelper } from "r5t-Avignon";

export class HtmlModel
{
    public static readonly DefaultElementClassName = "status-display-default-element";
    public static readonly InProgressElementClassName = "status-display-in-progress-element"
    public static readonly ErrorElementClassName = "status-display-error-element";
    public static readonly SuccessElementClassName = "status-display-success-element";
    public static readonly WarningElementClassName = "status-display-warning-element";
    public static readonly InnerSpanClassName = "status-display-inner-span";


    public readonly DefaultParagraph: HTMLParagraphElement;
    public readonly InProgressParagraph: HTMLParagraphElement;
    public readonly ErrorParagraph: HTMLParagraphElement;
    public readonly SuccessParagraph: HTMLParagraphElement;
    public readonly WarningParagraph: HTMLParagraphElement;

    public readonly DefaultTextSpan: HTMLSpanElement;
    public readonly InProgressTextSpan: HTMLSpanElement;
    public readonly ErrorTextSpan: HTMLSpanElement;
    public readonly SuccessTextSpan: HTMLSpanElement;
    public readonly WarningTextSpan: HTMLSpanElement;


    constructor(
        public readonly WrapperDiv: HTMLDivElement
    )
    {
        this.DefaultParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.DefaultElementClassName);
        this.InProgressParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.InProgressElementClassName);
        this.ErrorParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.ErrorElementClassName);
        this.SuccessParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.SuccessElementClassName);
        this.WarningParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.WarningElementClassName);

        this.DefaultTextSpan = QuerySelectorHelper.GetDescendentElementByClassName(this.DefaultParagraph, HtmlModel.InnerSpanClassName);
        this.InProgressTextSpan = QuerySelectorHelper.GetDescendentElementByClassName(this.InProgressParagraph, HtmlModel.InnerSpanClassName);
        this.ErrorTextSpan = QuerySelectorHelper.GetDescendentElementByClassName(this.ErrorParagraph, HtmlModel.InnerSpanClassName);
        this.SuccessTextSpan = QuerySelectorHelper.GetDescendentElementByClassName(this.SuccessParagraph, HtmlModel.InnerSpanClassName);
        this.WarningTextSpan = QuerySelectorHelper.GetDescendentElementByClassName(this.WarningParagraph, HtmlModel.InnerSpanClassName);
    }
}