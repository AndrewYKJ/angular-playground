import { ImageModel } from "../image/image.model";
import { UserModel } from "../user/user.model";

export class CropIssueQuestionModel {
    id: bigint;
    createdBy: UserModel;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string;
    images: ImageModel[];
}
