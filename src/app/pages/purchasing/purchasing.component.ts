import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit {


  constructor(){
    
  }

  profileForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    payment: new FormControl(''),
    address: new FormControl(''),
    notes: new FormControl('')
  });

  ngOnInit(){
   

  }

  simpandata(data: any) {
    const a = this.profileForm.value;
    console.log(a);
  }


}
