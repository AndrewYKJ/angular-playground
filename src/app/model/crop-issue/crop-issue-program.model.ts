import { UserModel } from "../user/user.model";
import { CropIssueProgramInfoModel } from "./crop-issue-program-info.model";
import { CropIssueModel } from "./crop-issue.model";

export class CropIssueProgramModel {
    id: bigint;
    createdBy: UserModel;
    createdAt: string;
    updatedAt: string;
    issue: CropIssueModel;
    info: CropIssueProgramInfoModel;
}
