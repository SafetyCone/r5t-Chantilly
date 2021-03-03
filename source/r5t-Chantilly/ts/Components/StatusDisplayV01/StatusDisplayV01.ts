import { HtmlElementHelper } from "r5t-Avignon";

import { HtmlModel } from "./HtmlModel";
import { IElementShowHideStylerV01 } from "../../Stylers/Interfaces/IElementShowHideStylerV01";
import { AlertType } from "../../Enumerations/AlertType";
import { HtmlModelExtensions } from "./HtmlModelExtensions";


export class StatusDisplayV01
{
    public readonly HtmlModel: HtmlModel;

    public get DefaultText(): string
    {
        let output = HtmlElementHelper.GetContent(this.HtmlModel.DefaultTextSpan);
        return output;
    }
    public set DefaultText(value: string)
    {
        HtmlElementHelper.SetContent(this.HtmlModel.DefaultTextSpan, value);
    }

    public get InProgressText(): string
    {
        let output = HtmlElementHelper.GetContent(this.HtmlModel.InProgressTextSpan);
        return output;
    }
    public set InProgressText(value: string)
    {
        HtmlElementHelper.SetContent(this.HtmlModel.InProgressTextSpan, value);
    }

    public get ErrorText(): string
    {
        let output = HtmlElementHelper.GetContent(this.HtmlModel.ErrorTextSpan);
        return output;
    }
    public set ErrorText(value: string)
    {
        HtmlElementHelper.SetContent(this.HtmlModel.ErrorTextSpan, value);
    }

    public get SuccessText(): string
    {
        let output = HtmlElementHelper.GetContent(this.HtmlModel.SuccessTextSpan);
        return output;
    }
    public set SuccessText(value: string)
    {
        HtmlElementHelper.SetContent(this.HtmlModel.SuccessTextSpan, value);
    }

    public get WarningText(): string
    {
        let output = HtmlElementHelper.GetContent(this.HtmlModel.WarningTextSpan);
        return output;
    }
    public set WarningText(value: string)
    {
        HtmlElementHelper.SetContent(this.HtmlModel.WarningTextSpan, value);
    }


    constructor(
        element: HTMLDivElement,
        public readonly Styler: IElementShowHideStylerV01)
    {
        this.HtmlModel = new HtmlModel(element);
    }

    public SetAlertType(alertType: AlertType)
    {
        let paragraphsByAlertType = HtmlModelExtensions.GetParagraphsByAlertType(this.HtmlModel);

        // First hide all.
        paragraphsByAlertType.forEach((x) =>
        {
            this.Styler.HideElement(x);
        })

        // Then show the chosen paragraph.
        let paragraph = paragraphsByAlertType.get(alertType);
        this.Styler.ShowElement(paragraph);
    }
}