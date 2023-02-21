import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Category } from "src/app/model/category/category";
import { PagedResult } from "src/app/model/paged-result/paged-result";
import { Nutrient } from "src/app/model/product/nutrient/nutrient";
import { Product } from "src/app/model/product/product";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
    private route = environment.apiServer;

    constructor(
        private http: HttpClient,
    ) {}

    //Product Categories

    getProductCategoryList(page: string, size: string, keyword?:string): Observable<PagedResult<Category>> {
        const endpoint = this.route + 'categories/product';
        let params = new HttpParams();
        params = params.append('page', page);
        params = params.append('size', size);
        if (keyword != null && keyword.length > 0) {
            params = params.append('keyword', keyword);
        }
        return this.http.get<any>(endpoint, {params})
        .pipe(map(model => {
            return {
                data: model.result.map((m: any) => new Category(m)),
                total: model.total
            };
        }));
    }

    getProductCategory(id: number): Observable<Category> {
        const endpoint = this.route + 'categories/' + id ;
        return this.http.get<Category>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    editProductCategory(id: number, myBody: any): Observable<any>{
        const endpoint = this.route + 'categories/' + id;
        return this.http.put<any>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    createProductCategoryInfo(id: number, name: string, language: string): Observable<any>{
        const endpoint = this.route + `categories/${id}/info`;
        const myBody = {name: name, language: language};
        return this.http.post<any>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    editProductCategoryInfo(categoryInfoId: number, name: string): Observable<any>{
        const endpoint = this.route + 'categories/info/' + categoryInfoId;
        const myBody = {name: name};
        return this.http.put<any>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    getSubProductCategoryList(page: string, size: string, parentId?: number, keyword?:string): Observable<PagedResult<Category>> {
        const endpoint = this.route + 'categories/sub_product';
        let params = new HttpParams();
        params = params.append('page', page);
        params = params.append('size', size);

        if(parentId != null) {
            params = params.append('parentId', parentId.toString());
        }

        if (keyword != null && keyword.length > 0) {
            params = params.append('keyword', keyword);
        }
        return this.http.get<any>(endpoint, {params})
        .pipe(map(model => {
            return {
                data: model.result.map((m: any) => new Category(m)),
                total: model.total
            };
        }));
    }

    createSubCategory(name: string, parent: number): Observable<Category> {
        const endpoint = this.route + 'categories';
        const myBody = {name: name, type: 'sub_product', parent: parent};
        return this.http.post<Category>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    deleteSubCategory(id: number): Observable<any>{
        const endpoint = this.route + 'categories/' + id;
        return this.http.delete<any>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    //Product Nutrients

    getNutrientList(page: string, size: string, keyword?:string): Observable<PagedResult<Nutrient>> {
        const endpoint = this.route + 'nutrients';
        let params = new HttpParams();
        params = params.append('page', page);
        params = params.append('size', size);
        if (keyword != null && keyword.length > 0) {
            params = params.append('keyword', keyword);
        }
        return this.http.get<any>(endpoint, {params})
        .pipe(map(model => {
            return {
                data: model.result.map((m: any) => new Nutrient(m)),
                total: model.total
            };
        }));
    }

    getNutrient(id: number): Observable<Nutrient> {
        const endpoint = this.route + 'nutrients/' + id ;
        return this.http.get<Nutrient>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    createNutrient(formula: string, name: string): Observable<Nutrient> {
        const endpoint = this.route + 'nutrients';
        const myBody = {formula: formula, name: name};
        return this.http.post<Nutrient>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    editNutrient(id: number, formula: string, name: string): Observable<any>{
        const endpoint = this.route + 'nutrients/' + id;
        const myBody = {formula: formula, name: name};
        return this.http.put<any>(endpoint, myBody).pipe(
            map(res => {
                return res;
            })
        )
    }

    deleteNutrient(id: number):Observable<any> {
        const endpoint = this.route + 'nutrients/' + id;
        return this.http.delete<any>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    //Products
    getProductList(page: string, size: string, keyword?:string, categoryId?: string, subCategoryId?: string): Observable<PagedResult<Product>> {
        const endpoint = this.route + 'products';
        let params = new HttpParams();
        params = params.append('page', page);
        params = params.append('size', size);
        if (keyword != null && keyword.length > 0) {
            params = params.append('keyword', keyword);
        }
        if (categoryId != null && categoryId.length > 0) {
            params = params.append('categoryId', categoryId);
        }
        if (subCategoryId != null && subCategoryId.length > 0) {
            params = params.append('subCategoryId', subCategoryId);
        }
        return this.http.get<any>(endpoint, {params})
        .pipe(map(model => {
            if (model.result != null) {
                return {
                    data: model.result.map((m: any) => new Product(m)),
                    total: model.total
                };
            } else {
                return {
                    total: model.total
                };
            }
            
        }));
    }

    getProduct(id: number): Observable<Product> {
        const endpoint = this.route + 'products/' + id ;
        return this.http.get<Product>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    createProduct(body: any): Observable<any>{
        const endpoint = this.route + 'products' ;
        return this.http.post<any>(endpoint, body).pipe(
            map(res => {
                return res;
            })
        )
    }

    deleteProduct(id: number):Observable<any> {
        const endpoint = this.route + 'products/' + id;
        return this.http.delete<any>(endpoint).pipe(
            map(res => {
                return res;
            })
        )
    }

    editProduct(id: number, body: any): Observable<any>{
        const endpoint = this.route + 'products/' + id ;
        return this.http.put<any>(endpoint, body).pipe(
            map(res => {
                return res;
            })
        )
    }

    createProductInfo(id: number, body: any): Observable<any> {
        const endpoint = this.route + `products/${id}/info`
        return this.http.post<any>(endpoint, body).pipe(
            map(res => {
                return res;
            })
        )
    }

    editProductInfo(productInfoId: number, body: any): Observable<any> {
        const endpoint = this.route + `products/info/${productInfoId}`
        return this.http.put<any>(endpoint, body).pipe(
            map(res => {
                return res;
            })
        )
    }

    
}