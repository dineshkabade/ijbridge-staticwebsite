import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLoader : boolean= false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.status.subscribe((value : boolean) => {
      this.showLoader = value;
    });
    
  }

}
