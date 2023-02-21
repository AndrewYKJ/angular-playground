import { ProductInfo } from "./product-info";
import { ProductInfoListModel } from "./product-info-list.model";

export class ProductInfoList {
    EN: ProductInfo;
    CN: ProductInfo;
    BM: ProductInfo;

    constructor(model: ProductInfoListModel) {
        this.EN = model.EN ;
        this.CN = model.CN ;
        this.BM = model.BM ;
    }
}