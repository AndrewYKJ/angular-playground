import { ImageModel } from "../image/image.model";
import { UserModel } from "../user/user.model";
import { CategoryInfoListModel } from "./category-info-list.model";
import { CategoryInfoModel } from "./category-info.model";

export class CategoryModel {
    id: any;
    createdBy: UserModel = new UserModel;
    createdAt!: string;
    updatedAt!: string;
    code!: string;
    image: ImageModel = new ImageModel;
    seq!: number;
    info: CategoryInfoModel = new CategoryInfoModel;
    infoList: CategoryInfoListModel = new CategoryInfoListModel;
    parent?: CategoryModel;
}
