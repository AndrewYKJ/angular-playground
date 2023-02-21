import { Image } from "../image/image";
import { User } from "../user/user";
import { CropIssueQuestionModel } from "./crop-issue-question.model";

export class CropIssueQuestion {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string;
    images: Image[];

    constructor(model: CropIssueQuestionModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.title = model.title;
        this.content = model.content;
        this.images = model.images ? model.images.map(value => new Image(value)) : [];
    }
}
