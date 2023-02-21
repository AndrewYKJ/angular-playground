import { Image } from "../image/image";
import { Language } from "../language/language";
import { User } from "../user/user";
import { CropIssueProgramInfoModel } from "./crop-issue-program-info.model";

export class CropIssueProgramInfo {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    language: Language;
    title: string;
    content: string;
    image: Image;

    constructor(model: CropIssueProgramInfoModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.language = model.language ? new Language(model.language) : null;
        this.title = model.title;
        this.content = model.content;
        this.image = model.image ? new Image(model.image) : null;
    }
}
