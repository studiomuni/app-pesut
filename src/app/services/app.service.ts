import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import{barang_mdl} from '../_model/barangMdl';
import{DatatablesModelResponse} from '../_model/datatables.model';

@Injectable({
    providedIn: 'root'
})
export class appService implements OnInit {

    ngOnInit(): void {

    }

    constructor(private _http: HttpClient) {
    }

    public viewAllUser() {
        return this._http.get(
            `http://localhost:8000/api/user`,
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }

    public viewGetUser(idUser:string) {
        return this._http.get(
            `http://localhost:8000/api/user/${idUser}`,
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }


    public datatables(datatablesParameters: any) {
        let params = new HttpParams();
        params = params.append('start', datatablesParameters.start);
        params = params.append('length', datatablesParameters.length);
        params = params.append('draw', datatablesParameters.draw);
        params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
        params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

        return this._http.post<DatatablesModelResponse>(
            `http://localhost:8000/api/datatables/barang`,
      
            {params: params}
        );
    }


    public create(userServ: barang_mdl) {
        return this._http.post(
            `http://localhost:8000/api/barang/add`,
            userServ,
            {observe: 'response', responseType: 'json'});
    }

  

    public viewAllBarang() {
        return this._http.get(
            `http://api.themunilab.com/api/barang`,
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }

    public getBarang(id:number) {
        return this._http.get(
            `http://api.themunilab.com/api/barang/${id}`,
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }


}

