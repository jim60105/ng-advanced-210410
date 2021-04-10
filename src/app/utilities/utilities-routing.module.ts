import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [
  { path: '', component: UtilitiesComponent },
  { path: 'color', component: ColorComponent },
  { path: 'color/:type', component: ColorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
