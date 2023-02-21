import { LanguageModel } from "../language/language.model";
import { UserModel } from "../user/user.model";

export class CategoryInfoModel {
    id!: bigint;
    createdBy: UserModel = new UserModel;
    createdAt!: string;
    updatedAt!: string;
    language: LanguageModel = new LanguageModel;
    name!: string;
}
