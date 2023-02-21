import { Language } from "../language/language";
import { User } from "../user/user";

export class ProductAttribute {
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    info!: ProductAttributeInfo;
    infoList!: ProductAttributeInfoList;
}

export class ProductAttributeInfo {
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    language!: Language;
    title!: string;
    content!: string;
}

export class ProductAttributeInfoList {
    EN!: ProductAttributeInfo;
    CN!: ProductAttributeInfo;
    BM!: ProductAttributeInfo;
}
