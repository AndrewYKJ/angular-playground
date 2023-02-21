import { CategoryInfo } from "./category-info";
import { CategoryInfoListModel } from "./category-info-list.model";
import { CategoryInfoModel } from "./category-info.model";

export class CategoryInfoList {
    EN: CategoryInfo | null;
    CN: CategoryInfo | null;
    BM: CategoryInfo | null;

    constructor(model: CategoryInfoListModel) {
        this.EN = model.EN ? new CategoryInfo(model.EN) : null;
        this.CN = model.CN ? new CategoryInfo(model.CN) : null;
        this.BM = model.BM ? new CategoryInfo(model.BM) : null;
    }
}
