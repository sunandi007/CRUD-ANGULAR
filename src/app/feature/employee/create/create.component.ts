import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EmployeeService} from "../../../core/_service/employee.service";
import {getUniqueId} from "../../../core/_utils/utils";
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  employeeForm!: FormGroup

  fb = inject(FormBuilder)
  service = inject(EmployeeService)
  router = inject(Router)
  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      birtDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
      picture: ['https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=', Validators.required],
    })
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeForm.value._id = getUniqueId(4)
      this.employeeForm.value.basicSalary.toString()
      this.service.createEmployee(this.employeeForm.value)
      this.router.navigateByUrl('/employee/list')
    }
  }
}
