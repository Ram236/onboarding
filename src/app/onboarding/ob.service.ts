import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObService {

  constructor(private http: HttpClient) { }

  retrieveData(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }
 
}
