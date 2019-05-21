import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../app/model/employee';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
