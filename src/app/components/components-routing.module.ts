import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
