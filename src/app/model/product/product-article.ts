
import { PhotoGallery } from "../crop-issue/photo-gallery";
import { Image } from "../image/image";
import { Language } from "../language/language";
import { User } from "../user/user";

export class ProductArticle{
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    info: ProductArticleInfo = new ProductArticleInfo;
    infoList: ProductArticleInfoList = new ProductArticleInfoList;
}

export class ProductArticleInfo{
    id!: bigint;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    language!: Language;
    title!: string;
    content!: string;
    image!: Image;
}

export class ProductArticleInfoList {
    EN: ProductArticleInfo = new ProductArticleInfo;
    CN: ProductArticleInfo = new ProductArticleInfo;
    BM: ProductArticleInfo = new ProductArticleInfo;
}


export class ProductArticleImage {
   title!: string;
   content!: string;
   image!: PhotoGallery;
}

export class ProductArticleBody {
    id: any;
    title!: string;
    content!: string;
    image: any;
}