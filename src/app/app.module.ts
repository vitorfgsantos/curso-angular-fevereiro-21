import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    Erro404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
