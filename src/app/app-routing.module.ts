import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utilities/color/color.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'utilities',
    children: [
      { path: 'color', component: ColorComponent },
      { path: 'color/:type', component: ColorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
