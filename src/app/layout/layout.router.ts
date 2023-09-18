import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {Routes} from "@angular/router";

export const EMPLOYEE_ROUTERS: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
]
