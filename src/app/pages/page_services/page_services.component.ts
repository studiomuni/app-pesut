import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page_services',
  templateUrl: './page_services.component.html',
  styleUrls: ['./page_services.component.scss']
})
export class pageservicesComponent implements OnInit {
  public today:any;
  public innerWidth: any;
  public detectScreen: any;
  public images:any;

  constructor(private router: Router){
  }

  ngOnInit(){
  
    this.images = [{'id':'1','name':'1','url':'assets/images/1.jpg','description':'Motor A'},
                   {'id':'2','name':'2','url':'assets/images/2.jpg','description':'Motor B'}];
    
    var now= Date.now();
    var date = new Date(now);
    var ampm;
    var hours = date.getHours();
    if (hours < 12 ){
      ampm = 'A.M';
    } else {
      ampm = 'P.M';
    }
    this.today = date.getHours() + ':' + date.getMinutes() + ' ' + ampm ;
  }


}
