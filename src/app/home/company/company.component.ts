import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  showLoader : boolean= true;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.status.subscribe((value : boolean) => {
      this.showLoader = value;
    });
  }

}
