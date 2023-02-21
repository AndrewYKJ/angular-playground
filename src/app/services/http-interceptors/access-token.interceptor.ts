import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageService } from "../storage.service";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
    constructor(
        private storageService: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let params = new HttpParams({ fromString: req.params.toString() });
        let headers = req.headers;

        if (params.get("noToken")) {
            params = params.delete("noToken");
        }
        else if (req.url.indexOf(environment.apiServer) != -1 && this.storageService.accessToken) {
            headers = headers.set("Authorization", `Bearer ${this.storageService.accessToken}`)
        }

        req = req.clone({
            params: params,
            headers: headers
        });

        return next.handle(req);
    }
}