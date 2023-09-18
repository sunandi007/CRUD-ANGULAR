import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../core/_service/employee.service";
import {filter, map, Observable, tap} from "rxjs";
import {Employee} from "../../../core/_model/employee.models";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {RupiahPipe} from "../../../shared/pipe/rupiah.pipe";

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  imports: [
    AsyncPipe,
    NgIf,
    NgOptimizedImage,
    RupiahPipe
  ],
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  activateRoute = inject(ActivatedRoute)
  service = inject(EmployeeService)
  router = inject(Router)

  detailEmployee$!: Observable<Employee>

  ngOnInit() {
    this.detailEmployee$ = this.service.getEmployees().pipe(
      map(employee => employee.filter((res) => res._id === this.activateRoute.snapshot.params['id'])[0]),
    )
  }

  back() {
    this.router.navigateByUrl('/employee/list')
  }

  protected readonly Number = Number;
}
