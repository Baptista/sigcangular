import { applicationType } from "../enums/applicationType"
import { PaginationRequestViewModel } from "./PaginationRequestViewModel";

export class VwSettingValuesFilterRequest extends PaginationRequestViewModel{
    BusinessUnitId: number;
    ApplicationType: applicationType;
}