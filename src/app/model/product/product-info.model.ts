import { Image } from "../image/image";
import { Language } from "../language/language";
import { User } from "../user/user";
import { ProductArticle } from "./product-article";
import { ProductAttribute } from "./product-attribute";

export class ProductInfoModel {
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    language!: Language;
    name?: string;
    description?: string;
    features?: string;
    application?: string;
    testimony?: string;
    testimonyImage?: Image;
    usefulInfo?: string;
    labelRecImage?: Image;
    attributes?: ProductAttribute[];
    articles?: ProductArticle[];
}
