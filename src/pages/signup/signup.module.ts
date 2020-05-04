import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup'; 
import { EstadoService } from '../../services/domein/estado.service';
import { CidadeService } from '../../services/domein/cidade.service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class SignupPageModule {}
