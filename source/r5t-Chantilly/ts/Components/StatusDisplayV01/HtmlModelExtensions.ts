import { AlertType } from "../../Enumerations/AlertType";
import { HtmlModel } from "./HtmlModel";

export class HtmlModelExtensions
{
    public static GetParagraphsByAlertType(htmlModel: HtmlModel)
    {
        let output: Map<AlertType, HTMLParagraphElement> = new Map([
            [AlertType.Default, htmlModel.DefaultParagraph],
            [AlertType.Info, htmlModel.InProgressParagraph],
            [AlertType.Error, htmlModel.ErrorParagraph],
            [AlertType.Success, htmlModel.SuccessParagraph],
            [AlertType.Warning, htmlModel.WarningParagraph],
        ]);
        return output;
    }
}