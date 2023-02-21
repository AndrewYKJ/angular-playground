import { User } from "../user/user";
import { ImageModel } from "./image.model";

export class Image {
    id: bigint | undefined;
    createdBy: User | undefined;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    filename: string | undefined;
    url: string | undefined;

    constructor(model: ImageModel) {
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.filename = model.filename;
        this.url = model.url;
    }
}