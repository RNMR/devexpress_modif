import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EXAMPLES_COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayDataComponent, ProfileComponent, EXAMPLES_PAGES } from './pages';

export const routes : Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [...EXAMPLES_COMPONENTS, EXAMPLES_PAGES],
  exports: [...EXAMPLES_COMPONENTS, EXAMPLES_PAGES],
})
export class ExamplesModule{

}