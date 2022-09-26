import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'module2', pathMatch: 'full' },
  {
    path: 'module2',
    loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
