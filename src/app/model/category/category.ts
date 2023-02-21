import { Image } from "../image/image";
import { User } from "../user/user";
import { CategoryInfo } from "./category-info";
import { CategoryInfoList } from "./category-info-list";
import { CategoryModel } from "./category.model";

export class Category {
    id: bigint;
    createdBy: User | null;
    createdAt: string;
    updatedAt: string;
    code: string;
    image: Image | null;
    seq: number;
    info: CategoryInfo| null;
    infoList: CategoryInfoList | null;
    parent?: Category | null;

    constructor(model: CategoryModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.code = model.code;
        this.image = model.image ? new Image(model.image) : null;
        this.seq = model.seq;
        this.info = model.info ? new CategoryInfo(model.info) : null;
        this.infoList = model.infoList ? new CategoryInfoList(model.infoList) : null;
        this.parent = model.parent ? new Category(model.parent) : null;
    }
}
