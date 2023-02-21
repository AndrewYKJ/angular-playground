import { Language } from "../language/language";
import { User } from "../user/user";
import { CategoryInfoModel } from "./category-info.model";

export class CategoryInfo {
    id: bigint;
    createdBy: User | null;
    createdAt: string;
    updatedAt: string;
    language: Language | null;
    name: string;

    constructor(model: CategoryInfoModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.language = model.language ? new Language(model.language) : null;
        this.name = model.name;
    }
}
