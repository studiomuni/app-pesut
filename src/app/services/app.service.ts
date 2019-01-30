import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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

