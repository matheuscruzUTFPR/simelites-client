import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Home } from './home';
import { HomeComponent } from './home.component';

@Injectable()
export class HomeService {

    private _url: string = ""

    constructor(private http: HttpClient) {}

    getHome(): Observable<Home>{
        const req = this.http.get<Home>(this._url);
        return req;
    }

    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }


}
