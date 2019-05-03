import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MyBudgetComponent } from './pages/myBudget/my-budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BUDGETS_PAGES } from './pages'; 

export const routes: Routes = [
  {
    path:'',
    component:MyBudgetComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes), SharedModule],
  declarations: [...BUDGETS_PAGES],
  exports:[...BUDGETS_PAGES],
})
export class BudgetsModule { }