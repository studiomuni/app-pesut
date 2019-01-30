import { Component,OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryImages2: NgxGalleryImage[];
  public innerWidth: any;
  public detectScreen: any;
  public id:number;
  public name:String;
  public price:number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      this.name = 'test';
      this.price = 20000;
    });


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
          preview: false
      },
      
  ];

  this.galleryImages = [
      {
        small: 'assets/images/1.jpg',
        medium: 'assets/images/1.jpg',
        big: 'assets/images/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo purus eget pulvinar ultricies. In enim leo, aliquet a tellus sed, ultrices faucibus dolor. Suspendisse viverra risus id justo hendrerit consectetur sed sed metus. Nam ut lacus accumsan, ultrices mi nec, ultricies urna. Praesent diam nunc, bibendum non eleifend et, sollicitudin in mauris. Proin tincidunt eleifend luctus. Fusce faucibus elit a urna iaculis cursus'
        
      },
      {
        small: 'assets/images/1.jpg',
        medium: 'assets/images/1.jpg',
        big: 'assets/images/1.jpg'
      },
      {
        small: 'assets/images/1.jpg',
        medium: 'assets/images/1.jpg',
        big: 'assets/images/1.jpg'
      }
  ];

  this.galleryImages2 = [
    {
      small: 'assets/images/2.jpg',
      medium: 'assets/images/2.jpg',
      big: 'assets/images/2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo purus eget pulvinar ultricies. In enim leo, aliquet a tellus sed, ultrices faucibus dolor. Suspendisse viverra risus id justo hendrerit consectetur sed sed metus. Nam ut lacus accumsan, ultrices mi nec, ultricies urna. Praesent diam nunc, bibendum non eleifend et, sollicitudin in mauris. Proin tincidunt eleifend luctus. Fusce faucibus elit a urna iaculis cursus'
      
    },
    {
      small: 'assets/images/2.jpg',
      medium: 'assets/images/2.jpg',
      big: 'assets/images/2.jpg'
    },
    {
      small: 'assets/images/2.jpg',
      medium: 'assets/images/2.jpg',
      big: 'assets/images/2.jpg'
    }
];

  }

  beli(event: Event){
  
    // this.router.navigate(['/detail'], {queryParams: {params: id}});
  }

}
