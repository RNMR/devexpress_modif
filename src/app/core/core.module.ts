
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';


const MODULES=[
  BrowserModule,
  HttpClientModule,
]

@NgModule({
  imports: [ ...MODULES, ],
  declarations: [],
  exports: [ ...MODULES,  ],
})
export class CoreModule {}