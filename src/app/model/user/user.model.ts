import { ImageModel } from "../image/image.model";

export class UserModel {
    id: bigint | undefined;
    email: string | undefined;
    name: string | undefined;
    photo: ImageModel | undefined;
    status: string | undefined;
    role: string | undefined;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    agreeMarketingUpdate: boolean | undefined;
    language: string | undefined;
    userType: string | undefined;
    company: string | undefined;
    country: string | undefined;
    mobileNo: string | undefined;
    area: string | undefined;
    permissions: string[] | undefined;
}
