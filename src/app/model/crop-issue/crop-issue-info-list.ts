import { CropIssueInfo } from "./crop-issue-info";
import { CropIssueInfoListModel } from "./crop-issue-info-list.model";

export class CropIssueInfoList {
    EN: CropIssueInfo;
    CN: CropIssueInfo;
    BM: CropIssueInfo;

    constructor(model: CropIssueInfoListModel) {
        this.EN = model.EN ? new CropIssueInfo(model.EN) : null;
        this.CN = model.CN ? new CropIssueInfo(model.CN) : null;
        this.BM = model.BM ? new CropIssueInfo(model.BM) : null;
    }
}
