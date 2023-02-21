import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { ComponentModule ,} from './component/component.module';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './services/api/auth.service';
import { httpInterceptorProviders } from './services/http-interceptors/http-interceptors';
import { ProductService } from './services/api/product.service';
import { AuthGuard } from './services/authGuard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
   
  ],
  imports: [
  
 
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    ComponentModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],

      }
    }),

    // // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // // and returns simulated server responses.
    // // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [AuthGuard, AuthService, ProductService, httpInterceptorProviders,],
  bootstrap: [AppComponent,],
   exports: [TranslateModule],
})
export class AppModule {
}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


