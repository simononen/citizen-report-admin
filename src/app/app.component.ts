import { AuthService } from './auth/_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'citizen-report-admin';

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
