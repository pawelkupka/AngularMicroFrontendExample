import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: 'full' },
  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
