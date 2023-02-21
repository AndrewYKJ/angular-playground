import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccessTokenInterceptor } from './access-token.interceptor';
import { HttpResponseInterceptor } from './http-response.interceptor';


export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
];