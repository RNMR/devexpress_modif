import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { MyBudgetComponent } from './pages/myBudget/my-budget.component';

export const routes: Routes = [
  {
    path:'',
    component:MyBudgetComponent
  }
]

@NgModule({
  imports:[],
  exports:[]
})
export class BudgetsModule { }