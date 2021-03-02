import { HtmlListItemList } from "r5t-Arbois/Index";
import { QuerySelectorHelper } from "r5t-Avignon/Index";

export class HtmlModel<TListElement extends HtmlListItemList>
{
    public static readonly DefaultParagraphClassName = "default-list-paragraph";
    public static readonly ListElementClassName = "list-element";


    public readonly DefaultParagraph: HTMLParagraphElement;
    public readonly ListElement: TListElement;

    
    constructor(
        public readonly WrapperDiv: HTMLDivElement,
    )
    {
        this.DefaultParagraph = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.DefaultParagraphClassName);
        this.ListElement = QuerySelectorHelper.GetDescendentElementByClassName(this.WrapperDiv, HtmlModel.ListElementClassName);
    }
}