import { User } from "../user/user";
import { LanguageModel } from "./language.model";

export class Language {
    id: bigint;
    createdBy: User | null;;
    createdAt: string;
    updatedAt: string;
    name: string;
    code: string;

    constructor(model: LanguageModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.name = model.name;
        this.code = model.code;
    }
}
