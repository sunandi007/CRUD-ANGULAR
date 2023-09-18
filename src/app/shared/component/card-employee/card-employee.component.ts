import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Employee} from "../../../core/_model/employee.models";
import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-employee',
  standalone: true,
  templateUrl: './card-employee.component.html',
  imports: [
    NgForOf,
    DatePipe,
    NgOptimizedImage
  ],
  styleUrls: ['./card-employee.component.css']
})
export class CardEmployeeComponent {
  router = inject(Router)
  @Input() employee!: Employee[] | [] |null
  @Input() currentPage = 1;
  @Input() itemsPerPage = 10;

  @Output() deleteCardById = new EventEmitter<string>();


  goToDetail(id: string) {
    this.router.navigate(['/employee/detail/' + id])
  }

  goToUpdate(id: string) {
    this.router.navigate(['/employee/edit/' + id])
  }

  onDelete(id: string) {
    this.deleteCardById.emit(id)
  }
}
