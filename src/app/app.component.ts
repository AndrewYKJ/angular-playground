import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment1';

  constructor(
    private translateService : TranslateService
  ) {
    translateService.addLangs(['en', 'zh']);
   
  }

  ngOnInit(): void {
   this.checkLang();

  }


  checkLang(){
    if ("lang" in localStorage) {
     
     
      this.translateService.use(localStorage.getItem('lang')!)
   
    } else {
     
      localStorage.setItem('lang','zh')
      this.translateService.use(localStorage.getItem('lang')!);
    }
  
  }
}
