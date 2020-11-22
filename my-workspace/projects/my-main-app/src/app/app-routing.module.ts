import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from "./utils/federation-utils";


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "my-service",
    loadChildren: () => loadRemoteModule({
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      remoteName: "my-service",
      exposedModule: "MyServiceModule" }).then((m) => m.MyServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
