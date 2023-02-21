import { Language } from "../language/language";
import { User } from "../user/user";
import { FilterTagInfoModel } from "./filterTag.info.model";

export class FilterTagInfo{
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    language: Language;
    name: string;

    constructor(model: FilterTagInfoModel){
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.language = model.language;
        this.name = model.name;
    }
}