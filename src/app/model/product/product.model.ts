import { Category } from "../category/category";
import { FilterTag } from "../filterTag/filterTag";
import { Image } from "../image/image";
import { User } from "../user/user";
import { Nutrient } from "./nutrient/nutrient";
import { ProductInfo } from "./product-info";
import { ProductInfoList } from "./product-info-list";

export class ProductModel {
    id!: number;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    category!: Category;
    subCategory!: Category;
    name!: string;
    image!: Image;
    images?: Image[];
    nutrients: Nutrient[] | undefined;;
    infoList?: ProductInfoList;
    info?: ProductInfo;
    cropsTags?: FilterTag[];
    activeIngredientTags?: FilterTag[];
    activityTags?: FilterTag[];
    characteristicsTags?: FilterTag[];
    compositionTags?: FilterTag[];
    phenologicalPhaseTags?: FilterTag[];
    formulationTags?: FilterTag[];
}