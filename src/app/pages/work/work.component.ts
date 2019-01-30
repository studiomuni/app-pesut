import { Component,OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public innerWidth: any;
  public detectScreen: any;

  constructor(){
    
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

    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '450px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false,
          imageDescription: description 
      },
      
  ];

  this.galleryImages = [
      {
        small: 'assets/images/pameran1.jpg',
        medium: 'assets/images/pameran1.jpg',
        big: 'assets/images/pameran1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo purus eget pulvinar ultricies. In enim leo, aliquet a tellus sed, ultrices faucibus dolor. Suspendisse viverra risus id justo hendrerit consectetur sed sed metus. Nam ut lacus accumsan, ultrices mi nec, ultricies urna. Praesent diam nunc, bibendum non eleifend et, sollicitudin in mauris. Proin tincidunt eleifend luctus. Fusce faucibus elit a urna iaculis cursus'
        
      },
      {
        small: 'assets/images/pameran2.jpg',
        medium: 'assets/images/pameran2.jpg',
        big: 'assets/images/pameran2.jpg'
      },
      {
        small: 'assets/images/pameran3.jpg',
        medium: 'assets/images/pameran3.jpg',
        big: 'assets/images/pameran3.jpg'
      }
  ];

  }
}
