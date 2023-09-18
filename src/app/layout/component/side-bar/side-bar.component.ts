import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../core/_service/auth.service";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  service = inject(AuthService)

  logOut() {
    this.service.logout()
  }
}
