import { User } from "../user/user";
import { FilterTagInfoList } from "./filterTag-info-list";
import { FilterTagInfo } from "./filterTag.info";
import { FilterTagModel } from "./filterTag.model";

export class FilterTag{
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    seq: number;
    info: FilterTagInfo;
    infoList: FilterTagInfoList;

    constructor(model: FilterTagModel){
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.seq = model.seq;
        this.info = model.info;
        this.infoList = model.infoList;
    }
}