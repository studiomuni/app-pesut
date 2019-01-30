import { Component,OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public today:any;
  public innerWidth: any;
  public detectScreen: any;
  public path: string;
  public ps: any;
  closeResult: string;

  constructor(private modalService: NgbModal){
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(){

    this.ps = window.location.pathname;

    console.log(this.ps);

    if(this.ps = "/app/home"){
      this.path = "1"
    } else if(this.ps = "/app/work"){
      this.path = "0";
    }

    console.log(this.path)

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
