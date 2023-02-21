
import { Image } from "../image/image";
import { UserModel } from "./user.model";

export class User  {
    id: bigint | undefined;
    email: string | undefined;
    name: string | undefined;
    photo: Image | null;
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

    constructor(model: UserModel) {
      
        this.id = model.id;
        this.email = model.email;
        this.name = model.name;
        this.photo = model.photo ? new Image(model.photo) : null;
        this.status = model.status;
        this.role = model.role;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.agreeMarketingUpdate = model.agreeMarketingUpdate;
        this.language = model.language;
        this.userType = model.userType;
        this.company = model.company;
        this.country = model.country;
        this.mobileNo = model.mobileNo;
        this.area = model.area;
        this.permissions = model.permissions;
    }
}
