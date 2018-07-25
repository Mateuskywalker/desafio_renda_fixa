import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

    constructor(private http: Http, private httpClient: HttpClient) {}

    public get_records(): Observable<any> {
        return this.httpClient.get<any>('http://127.0.0.1:5000/get_records');
    }

    public insert_record(nome: string, email: string, telefone: string): Observable<any> {
        return this.httpClient.post<any>('http://127.0.0.1:5000/insert_record',
        {nome: nome, email: email, telefone: telefone});
    }
}
