import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {appService} from '../../services/app.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import{barang_mdl} from '../../_model/barangMdl';

@Component({
  selector: 'app-page_services',
  templateUrl: './page_services.component.html',
  styleUrls: ['./page_services.component.scss']
})
export class pageservicesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  public data: any;
  public temp_var: Object=false;  

  constructor(private router: Router,
              private sevice: appService,
              private http: HttpClient){
  }

  ngOnInit(){
  //   let dataTablesParameters: any;
  //   this.sevice.datatables(dataTablesParameters).subscribe(resp => {
  //     this.data = resp;
  //     this.temp_var = true;
  //     console.log(this.data); 
  // });

  const that = this;
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    serverSide: true,
    processing: true,
    searching: false,
    ajax: (dataTablesParameters: any, callback) => {
      that.sevice.datatables(dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
    },
    columns: [ {data: 'nama_barang', title: 'Nama Barang', className: 'text-left'},
               {data: 'jenis_barang', title: 'Jenis Barang', className: 'text-left'},
               {data: 'tipe_barang', title: 'Tipe Barang', className: 'text-left'},
               {data: 'harga', title: 'Harga Barang', className: 'text-left'},
               {data: 'keterangan_barang', title: 'Keterangan', className: 'text-left'},]
  };

  }


}
