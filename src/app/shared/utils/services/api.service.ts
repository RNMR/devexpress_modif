import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


export class ApiService {

  constructor( protected http:HttpClient ){

  }

  private gettingErrors(error:any){
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()) : Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable <any>{
    return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body))
            .pipe(catchError(this.gettingErrors));
  }

  post(path: string, body: Object = {}, options?:any): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body, options);
  }

  delete(path: string) {
    return this.http.delete(`${environment.api_url}${path}`)
            .pipe(catchError(this.gettingErrors));
  }
}