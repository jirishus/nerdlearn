import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  /*
   * Instance variables
   */
  title = 'nerdlearn';

  ngOnInit() {
    console.log('welcome to your dashboard');
  }

  /*
   * Component Actions
   */
  viewDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  viewStats() {
    this.router.navigateByUrl('/stats');
  }
}
