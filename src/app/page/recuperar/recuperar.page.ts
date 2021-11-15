import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private AlertCtrl: AlertController) { }

  ngOnInit() {
  }

  //Formulario en donde se escribe el numero verificador 
  
  async presentAlertPrompt() {
    const alert = await this.AlertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Ingresa tu codigo de verificacion aqui.',
      inputs: [
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Codigo de verificacion',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
