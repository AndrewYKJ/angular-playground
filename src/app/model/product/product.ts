import { Category } from "../category/category";
import { FilterTag } from "../filterTag/filterTag";
import { Image } from "../image/image";
import { User } from "../user/user";
import { Nutrient } from "./nutrient/nutrient";
import { ProductInfo } from "./product-info";
import { ProductInfoList } from "./product-info-list";
import { ProductModel } from "./product.model";

export class Product {
 
    id: number;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    category: Category;
    subCategory: Category;
    name: string;
    image: Image;
    images?: Image[];
    nutrients?: Nutrient[] | undefined;
    infoList?: ProductInfoList;
    info?: ProductInfo;
    cropsTags?: FilterTag[];
    activeIngredientTags?: FilterTag[];
    activityTags?: FilterTag[];
    characteristicsTags?: FilterTag[];
    compositionTags?: FilterTag[];
    phenologicalPhaseTags?: FilterTag[];
    formulationTags?: FilterTag[];

    constructor(model: ProductModel) {
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.category = model.category;
        this.subCategory = model.subCategory;
        this.name = model.name;
        this.image = model.image;
        this.images = model.images;
        this.nutrients = model.nutrients;
        this.infoList = model.infoList;
        this.info = model.info;
        this.cropsTags = model.cropsTags ? model.cropsTags.map(val => new FilterTag(val)) : [];
        this.activeIngredientTags = model.activeIngredientTags ? model.activeIngredientTags.map(val => new FilterTag(val)) : [];
        this.activityTags = model.activityTags ? model.activityTags.map(val => new FilterTag(val)) : [];
        this.characteristicsTags = model.characteristicsTags ? model.characteristicsTags.map(val => new FilterTag(val)) : [];
        this.compositionTags = model.compositionTags ? model.compositionTags.map(val => new FilterTag(val)) : [];
        this.phenologicalPhaseTags = model.phenologicalPhaseTags ? model.phenologicalPhaseTags.map(val => new FilterTag(val)) : [];
        this.formulationTags = model.formulationTags ? model.formulationTags.map(val => new FilterTag(val)) : [];

    }
}