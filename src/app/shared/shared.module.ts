import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  DxValidationGroupModule, DxValidatorModule, DxTextBoxModule, DxListModule,
  DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxScrollViewModule, 
  DxDrawerModule, DxContextMenuModule, DxTreeViewModule, 
  DxDataGridModule, DxFormModule, DxTreeListModule  
} from 'devextreme-angular';

const MODULES=[
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule, DxDataGridModule, DxFormModule,
  DxButtonModule, DxCheckBoxModule, DxContextMenuModule,
  DxTextBoxModule, DxValidatorModule, DxValidationGroupModule,
  DxToolbarModule, DxScrollViewModule, DxDrawerModule, DxListModule, 
  DxTreeViewModule, DxTreeListModule
]

@NgModule({
  imports: [...MODULES, ],
  exports: [...MODULES],
})
export class SharedModule { }