import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  {path: "", component: CardsComponent},
  {path: "view", component: ViewComponent},
  {path: "edit", component: EditComponent},
  {path: "about", component: AboutComponent},
  {path: "explore", component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
