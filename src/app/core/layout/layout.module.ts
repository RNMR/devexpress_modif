import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LAYOUT_COMPONENTS } from './components';
import { LAYOUT_PAGES, LayoutComponent } from './pages';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService, AuthService, ScreenService, AppInfoService } from '../services';

const routes: Routes=[
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: '../../modules/home/home.module#HomeModule',
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'examples',
        loadChildren: '../../modules/examples/examples.module#ExamplesModule',
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'login-form',
        loadChildren: '../../modules/auth/auth.module#AuthModule',
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'budgets',
        loadChildren: '../../modules/budgets/budgets.module#BudgetsModule',
        canActivate: [ AuthGuardService ]
      },
      {
        path: '**',
        redirectTo: '/home',
        canActivate: [ AuthGuardService ]
      }
    ]
  }

]

@NgModule({
  imports:[
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [...LAYOUT_COMPONENTS, LAYOUT_PAGES],
  providers: [AuthService, ScreenService, AppInfoService, AuthGuardService],
  exports:[...LAYOUT_COMPONENTS, LAYOUT_PAGES]
})
export class LayoutModule{
}