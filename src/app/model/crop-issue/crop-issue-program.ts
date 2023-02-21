import { User } from "../user/user";
import { CropIssue } from "./crop-issue";
import { CropIssueProgramInfo } from "./crop-issue-program-info";
import { CropIssueProgramModel } from "./crop-issue-program.model";

export class CropIssueProgram {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    issue: CropIssue;
    info: CropIssueProgramInfo;

    constructor(model: CropIssueProgramModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.issue = model.issue ? new CropIssue(model.issue) : null;
        this.info = model.info ? new CropIssueProgramInfo(model.info) : null;
    }
}
