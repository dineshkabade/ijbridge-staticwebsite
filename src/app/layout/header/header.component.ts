import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isJapanese: boolean = false;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  
  switchLang1(lang: boolean) {
    if( lang ) {
      this.translate.use("en");
    } else {
      this.translate.use("jp");
    }
    this.isJapanese = !this.isJapanese;
  }

}
