import {ListComponent} from "../feature/employee/list/list.component";
import {CreateComponent} from "../feature/employee/create/create.component";
import {DetailComponent} from "../feature/employee/detail/detail.component";
import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";

export const EMPLOYEE_ROUTERS: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  }
]
