import { User } from "../user/user";

export class ImageModel {
    id: bigint | undefined;
    createdBy: User | undefined;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    filename: string | undefined;
    url: string | undefined;
}