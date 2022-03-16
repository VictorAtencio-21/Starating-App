/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Importing HTTPClient Module
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Importing AuthGuard
import { AuthGuard } from './auth.guard';

//Importing Incerceptor
import { TokenInterceptorService } from './services/token-interceptor.service';

//Importing Filter Pipe ng2-search-filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, Ng2SearchPipeModule],
  providers: [
    AuthGuard,{
    provide:  RouteReuseStrategy,
    useClass: IonicRouteStrategy
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
