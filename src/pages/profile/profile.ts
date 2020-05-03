import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domein/cliente.service';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  cliente:ClienteDTO;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storege :StorageService,
    public clienteService:ClienteService) {
  }

  ionViewDidLoad() {
    let localUser=this.storege.getLocalUser();
    let bucketBaseUrl=API_CONFIG.bucketBaseUrl;
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response=>{
        response.imageUrl=bucketBaseUrl+'/cp'+ response.id+'.jpg';
        console.log(response.imageUrl);
        this.cliente=response;

      } ,
      error => {}
      )
    }
    
  }
/* getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      this.blobToDataURL(response).then(dataUrl => {
        let str : string = dataUrl as string;
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
      });
    },
    error => {
      this.profileImage = 'assets/imgs/avatar-blank.png';
    });
  }*/

}
