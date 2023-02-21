import { CategoryModel } from "../category/category.model";
import { ImageModel } from "../image/image.model";
import { ProductModel } from "../product/product.model";
import { UserModel } from "../user/user.model";
import { CropIssueInfoListModel } from "./crop-issue-info-list.model";
import { CropIssueInfoModel } from "./crop-issue-info.model";
import { CropIssueProgramModel } from "./crop-issue-program.model";

export class CropIssueModel {
    id: bigint;
    createdBy: UserModel;
    createdAt: string;
    updatedAt: string;
    info: CropIssueInfoModel;
    category: CategoryModel;
    image: ImageModel;
    type: string;
    images: ImageModel[];
    infoList: CropIssueInfoListModel;
    // programs: CropIssueProgramModel[];
    products: ProductModel[];
}
