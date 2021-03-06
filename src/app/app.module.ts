import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpClientModule} from '@angular/common/http'
import { CategoriaService } from '../services/domein/categoria.service';
import { ErrorInterceptorProvider } from '../interceptor/error.interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/domein/cliente.service';
import { AuthInterceptorProvider } from '../interceptor/auth-interceptor';
import { EstadoService } from '../services/domein/estado.service';
import { CidadeService } from '../services/domein/cidade.service';
import { ProdutoService } from '../services/domein/produto.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthInterceptorProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    CidadeService,
    EstadoService,
    ProdutoService
  ]
})
export class AppModule {}
