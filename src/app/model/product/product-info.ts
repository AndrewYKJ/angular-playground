import { Image } from "../image/image";
import { Language } from "../language/language";
import { User } from "../user/user";
import { ProductArticle } from "./product-article";
import { ProductAttribute } from "./product-attribute";
import { ProductInfoModel } from "./product-info.model";

export class ProductInfo {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    language: Language;
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


    constructor(model: ProductInfoModel) {
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.language = model.language;
        this.name = model.name;
        this.description = model.description;
        this.features = model.features;
        this.application = model.application;
        this.testimony = model.testimony;
        this.testimonyImage = model.testimonyImage;
        this.usefulInfo = model.usefulInfo;
        this.labelRecImage = model.labelRecImage;
        this.attributes = model.attributes;
        this.articles = model.articles;
    }
}