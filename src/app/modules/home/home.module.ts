import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HOME_PAGES, HomeComponent } from './pages';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [...HOME_PAGES],
  exports: [...HOME_PAGES],
})
export class HomeModule{

}