import { User } from "../user/user";
import { FilterTagInfoList } from "./filterTag-info-list";
import { FilterTagInfo } from "./filterTag.info";

export class FilterTagModel{
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    seq!: number;
    info!: FilterTagInfo;
    infoList!: FilterTagInfoList;
}