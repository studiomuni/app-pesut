import { Component,OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { appService } from '../../services/app.service';

@Component({
  selector: 'app-page_test',
  templateUrl: './page_test.component.html',
  styleUrls: ['./page_test.component.scss']
})
export class PageTest implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public innerWidth: any;
  public detectScreen: any;
  public data: any;
  public temp_var: Object=false;  

  constructor(private appService: appService){
    
  }

  ngOnInit(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<566){
      this.detectScreen = '0';
    } else {
      this.detectScreen = '1';
    }

    var description;
    if(this.detectScreen == 1){
      description = true 
    } else {
      description = false 
    }

  //   this.appService.viewAllUser().subscribe(resp => {
  //     this.data = resp;
  //     this.temp_var = true;

  //     // console.log(this.data);

  // });

  var idUser = '1';
  this.appService.viewGetUser(idUser).subscribe(resp => {
    this.data = resp;
    this.temp_var = true;

    console.log(this.data);

});
   

  }
}
