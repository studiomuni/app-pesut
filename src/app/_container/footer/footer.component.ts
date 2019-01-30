import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public today:any;
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
