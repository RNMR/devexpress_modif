
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CORE_PROVIDERS } from './services';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}


const MODULES=[
  BrowserModule,
  HttpClientModule,
]

@NgModule({
  imports: [ ...MODULES, ],
  declarations: [],
  exports: [ ...MODULES,  ],
  providers: [CORE_PROVIDERS]
})
export class CoreModule {}