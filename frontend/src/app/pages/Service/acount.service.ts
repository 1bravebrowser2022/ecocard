import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor(private http: HttpClient) { }

  onLogin(obj : any) : Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/users',obj);
  }

  onSignup(obj : any) : Observable<any>{
    return this.http.post('http://127.0.0.1:5000/api/users',obj);
  }

}
