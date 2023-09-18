import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SideBarComponent} from "./component/side-bar/side-bar.component";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";

@Component({
  selector: 'app-layout',
  template: `
      <nav class="fixed top-0 z-50 w-full bg-primary-950 dark:bg-gray-800">
          <app-header></app-header>
      </nav>
      <aside id="logo-sidebar"
             class="fixed top-0 left-0 z-40 w-64 h-screen pt-[3.5rem] transition-transform -translate-x-full bg-primary-900 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
             aria-label="Sidebar">
          <app-side-bar></app-side-bar>
      </aside>
      <div class="min-h-screen bg-gray-200 p-4 pt-[4.5rem]">
        <div class="sm:ml-64 bg-gray-200 rounded-md ml-4">
          <router-outlet></router-outlet>
        </div>
      </div>
      <footer class="relative bottom-0">
          <app-footer></app-footer>
      </footer>
  `,
  standalone: true,
  imports: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
})
export class LayoutComponent {

}
