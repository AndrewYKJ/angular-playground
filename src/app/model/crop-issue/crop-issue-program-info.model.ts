import { ImageModel } from "../image/image.model";
import { LanguageModel } from "../language/language.model";
import { UserModel } from "../user/user.model";

export class CropIssueProgramInfoModel {
    id: bigint;
    createdBy: UserModel;
    createdAt: string;
    updatedAt: string;
    language: LanguageModel;
    title: string;
    content: string;
    image: ImageModel;
}
