import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public router: Router,
    public _authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['login']);
  }

}
