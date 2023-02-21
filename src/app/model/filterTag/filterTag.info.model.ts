import { Language } from "../language/language";
import { User } from "../user/user";

export class FilterTagInfoModel{
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    language!: Language;
    name!: string;
}