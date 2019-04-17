import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'display-data',
  //   component: DisplayDataComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'login-form',
  //   component: LoginFormComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  //   canActivate: [ AuthGuardService ]
  // }
  {
    path: '',
    loadChildren: './core/layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
