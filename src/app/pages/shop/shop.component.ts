import { Component,OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {appService} from '../../services/app.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public images:any;
  public data: any;
  public temp_var: Object=false;  
  public barang: any;

  @Input('data') meals: string[] = [];
  page: number = 1;

  constructor(private router: Router,
              private sevice: appService){
  }

  ngOnInit(){
    this.sevice.viewAllBarang().subscribe(resp => {
        this.data = resp;
        this.temp_var = true;
        // console.log(this.data);
        this.barang = this.data.body;
    });
  }


}
