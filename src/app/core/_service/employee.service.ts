import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, share, take} from "rxjs";
import {Employee} from "../_model/employee.models";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient)

  public employeeListed: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  public querySearch: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() {
    this.getEmployee().subscribe(res => {
        this.employeeListed.next(res)
    })
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('assets/employee.json').pipe(share());
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeeListed.asObservable()
  }

  createEmployee(newEmployee: Employee): void{
    let employee: Employee[] = [];
    this.employeeListed.pipe(take(1)).subscribe(result => {
      employee = result
      if (result) {
        result.push(newEmployee)
      }
    })
    this.employeeListed.next(employee)
  }
}
