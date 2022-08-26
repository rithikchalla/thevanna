import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thevanna';
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home'
      },
      {
        label: 'About Us'
      },
      {
        label: 'Contact'
      }
    ]
  }
}
