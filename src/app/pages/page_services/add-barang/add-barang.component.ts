import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {appService} from '../../../services/app.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import{barang_mdl} from '../../../_model/barangMdl';
import { FormGroup, FormControl ,Validators } from '@angular/forms';



@Component({
  selector: 'app-add-barang',
  templateUrl: './add-barang.component.html',
  styleUrls: ['./add-barang.component.scss']
})
export class addbarangComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  public data: any;
  public temp_var: Object=false;  

  constructor(private router: Router,
              private sevice: appService,
              private http: HttpClient){
  }

  profileForm = new FormGroup({
    nama_barang: new FormControl('', Validators.required),
    jenis_barang: new FormControl('', Validators.required),
    tipe_barang: new FormControl('', Validators.required),
    harga: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    keterangan_barang: new FormControl('', Validators.required)
  });

  ngOnInit(){
 

  }


  buttonCancel() {
    this.router.navigate(['/service']);
}
  
  simpandata(data: any) {
    // const a = this.profileForm.value;
    // console.log(a);

    const userserve: barang_mdl = this.profileForm.value;
    // console.log(userserve);
    this.sevice.create(userserve).subscribe(
        response => {
            this.router.navigate(['/service']);
        
        }, error => {
          this.router.navigate(['/service']);

        });     


  }

}
