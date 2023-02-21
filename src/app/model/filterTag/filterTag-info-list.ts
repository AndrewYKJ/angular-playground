import { FilterTagInfoListModel } from "./filterTag-info-list.model";
import { FilterTagInfo } from "./filterTag.info";
import { FilterTagInfoModel } from "./filterTag.info.model";

export class FilterTagInfoList{
    EN: FilterTagInfo;
    CN: FilterTagInfo;
    BM: FilterTagInfo;

    constructor(model: FilterTagInfoListModel){
        this.EN = model.EN;
        this.CN = model.CN;
        this.BM = model.BM;
    }
}