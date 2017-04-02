import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Buyer} from './buyer.interface';

@Injectable()
export class AppComponentService {
   

        constructor(private http : Http) {};

 

        getBuyerDetails(str): Observable<Buyer[]>  {
             //   let options = this.getHeaderOptions();
                return this
                        .http
                        .get("http://localhost:4200/buyer.json", null)
                        .map((res : Response) => res.json())
                        .catch(this.handleError);

        }
      
 private handleError(error: any): Observable<any> {
                console.error('An error occurred', error); 
                return Observable.throw(error.message || error);
        }
}