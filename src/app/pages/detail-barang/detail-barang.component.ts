import { Component,OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {appService} from '../../services/app.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-detail-barang',
  templateUrl: './detail-barang.component.html',
  styleUrls: ['./detail-barang.component.scss']
})
export class detailBarang implements OnInit {
  public images:any;
  public data: any;
  public temp_var: Object=false;  
  public barang: any;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryImages2: NgxGalleryImage[];
  public innerWidth: any;
  public detectScreen: any;
  public id:number;
  public name:String;
  public price:number;



  constructor(private router: Router,
              private sevice: appService,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      // console.log(id);

      this.sevice.getBarang(id).subscribe(resp => {
        this.data = resp;
        this.temp_var = true;
        // console.log(this.data);
        this.barang = this.data.body[0];
        // console.log(this.barang);
        this.galleryImages = [
          {
            small: 'data:image/jpeg;base64,'+this.barang.foto,
            medium: 'data:image/jpeg;base64,'+this.barang.foto,
            big: 'data:image/jpeg;base64,'+this.barang.foto,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo purus eget pulvinar ultricies. In enim leo, aliquet a tellus sed, ultrices faucibus dolor. Suspendisse viverra risus id justo hendrerit consectetur sed sed metus. Nam ut lacus accumsan, ultrices mi nec, ultricies urna. Praesent diam nunc, bibendum non eleifend et, sollicitudin in mauris. Proin tincidunt eleifend luctus. Fusce faucibus elit a urna iaculis cursus'
            
          },
          {
            small: 'data:image/jpeg;base64,'+this.barang.foto,
            medium: 'data:image/jpeg;base64,'+this.barang.foto,
            big: 'data:image/jpeg;base64,'+this.barang.foto,
          },
          {
            small: 'data:image/jpeg;base64,'+this.barang.foto,
            medium: 'data:image/jpeg;base64,'+this.barang.foto,
            big: 'data:image/jpeg;base64,'+this.barang.foto,
          }
      ];
        
    });


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



  }
  


}
