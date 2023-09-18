import {Component, inject, OnInit} from '@angular/core';
import {CardEmployeeComponent} from "../../../shared/component/card-employee/card-employee.component";
import {EmployeeService} from "../../../core/_service/employee.service";
import {filter, map, Observable, switchMap, tap} from "rxjs";
import {Employee} from "../../../core/_model/employee.models";
import {AsyncPipe} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [
    CardEmployeeComponent,
    AsyncPipe,
    RouterLink,
    FormsModule
  ],
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  service = inject(EmployeeService)

  currentPage: number = 1
  totalPages: number = 10
  searchQuery: string = '';

  dataEmployee$!: Observable<Employee[] | [] | null>

  ngOnInit() {
    this.dataEmployee$ = this.service.getEmployees().pipe(
      map(result => result)
    )
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber
  }

  onFilter() {
    this.currentPage = 1
    this.dataEmployee$ = this.service.getEmployees().pipe(
      map(employee => employee.filter((res) => res.username.toLowerCase().includes(this.searchQuery.toLowerCase())),
      ))
  }

  onDeleteEmploy(id: string) {
    this.dataEmployee$ = this.service.getEmployees().pipe(
      map(employee => employee.filter((res) => res._id !== id)),
    )
  }

}
