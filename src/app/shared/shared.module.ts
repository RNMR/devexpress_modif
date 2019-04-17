import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  DxValidationGroupModule, DxValidatorModule, DxTextBoxModule, DxListModule,
  DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxScrollViewModule, 
  DxDrawerModule, DxContextMenuModule, DxTreeViewComponent, DxTreeViewModule, 
  DxDataGridModule, DxFormModule  
} from 'devextreme-angular';

const MODULES=[
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule, DxDataGridModule, DxFormModule,
  DxButtonModule, DxCheckBoxModule, DxContextMenuModule,
  DxTextBoxModule, DxValidatorModule, DxValidationGroupModule,
  DxToolbarModule, DxScrollViewModule, DxDrawerModule, DxListModule, 
  DxTreeViewComponent, DxTreeViewModule
]

@NgModule({
  imports: [...MODULES, ],
  exports: [...MODULES],
})
export class SharedModule { }