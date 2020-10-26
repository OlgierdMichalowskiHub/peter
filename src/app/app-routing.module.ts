import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
