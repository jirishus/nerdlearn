import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsboardComponent } from './statsboard/statsboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stats', component: StatsboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
