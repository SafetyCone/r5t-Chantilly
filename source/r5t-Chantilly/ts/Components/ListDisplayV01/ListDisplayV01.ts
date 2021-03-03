import { HtmlListItemList } from "r5t-Arbois/Index";
import { HtmlElementHelper } from "r5t-Avignon/Index";
import { IElementShowHideStylerV01 } from "../../Stylers/Interfaces/IElementShowHideStylerV01";

import { HtmlModel } from "./HtmlModel";

export interface IListDisplayV01<TValue>
{
    Show(values: TValue[]): Promise<void>
}

export class ListDisplayV01<TListElement extends HtmlListItemList, TValue> implements IListDisplayV01<TValue>
{
    public readonly HtmlModel: HtmlModel<TListElement>;


    constructor(
        element: HTMLDivElement,
        public readonly ListItemProvider: (value: TValue) => Promise<HTMLLIElement>,
        private readonly Styler: IElementShowHideStylerV01,
    )
    {
        this.HtmlModel = new HtmlModel(element);
    }

    public Clear()
    {
        this.ShowDefaultHideList();

        this.ClearListElements();
    }

    private ClearListElements()
    {
        HtmlElementHelper.RemoveAllChildren(this.HtmlModel.ListElement);
    }

    private ShowListHideDefault()
    {
        this.Styler.ShowElement(this.HtmlModel.ListElement);
        this.Styler.HideElement(this.HtmlModel.DefaultParagraph);
    }

    private ShowDefaultHideList()
    {
        this.Styler.HideElement(this.HtmlModel.ListElement);
        this.Styler.ShowElement(this.HtmlModel.DefaultParagraph);
    }

    public async Show(values: TValue[])
    {
        // Ensure list is clear.
        this.ClearListElements();

        // Add elements.
        let listItems: HTMLLIElement[] = [];
        for (const value of values)
        {
            let listItem = await this.ListItemProvider(value);

            listItems.push(listItem);
        }

        this.HtmlModel.ListElement.append(...listItems);

        // Show the list, now that it's ready.
        this.ShowListHideDefault();
    }
}