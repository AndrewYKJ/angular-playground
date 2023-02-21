import { Category } from "../category/category";
import { Image } from "../image/image";
import { Product } from "../product/product";
import { User } from "../user/user";
import { CropIssueInfo } from "./crop-issue-info";
import { CropIssueInfoList } from "./crop-issue-info-list";
import { CropIssueProgram } from "./crop-issue-program";
import { CropIssueModel } from "./crop-issue.model";

export class CropIssue {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    info: CropIssueInfo;
    category: Category;
    image: Image;
    type: string;
    images: Image[];
    infoList: CropIssueInfoList;
    products: Product[];

    constructor(model: CropIssueModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.info = model.info ? new CropIssueInfo(model.info) : null;
        this.category = model.category ? new Category(model.category) : null;
        this.image = model.image ? new Image(model.image) : null;
        this.type = model.type;
        this.images = (model.images) ? model.images.map(value => new Image(value)) : [];
        this.infoList = model.infoList ? new CropIssueInfoList(model.infoList) : null;
        this.products = model.products ? model.products.map(value => new Product(value)) : [];
    }
}
