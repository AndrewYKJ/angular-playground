import { UserModel } from "../user/user.model";

export class LanguageModel {
    id!: bigint;
    createdBy!: UserModel;
    createdAt!: string;
    updatedAt!: string;
    name!: string;
    code!: string;
}