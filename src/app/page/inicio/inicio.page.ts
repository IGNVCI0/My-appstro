import { Component, OnInit } from '@angular/core';

//LIBRERIAS IMPORTADAS DE ANGULAR

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//LIBRERIAS IMPORTADAS DE IONIC

import { AlertController, LoadingController, NavController } from '@ionic/angular';

//IMPORT PARA EXTRAER LOS DATOS DEL SERVICIO


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  //SE DECLARA EL FORMULARIO 

  formularioLogin: FormGroup;
  router: any;

  //CONSTRUCTOR DEL FORMULARIO

  constructor(private AlertCtrl: AlertController, private LoadingCtrl: LoadingController, 
    public fb: FormBuilder,public alertController: AlertController, public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'correoelectronico': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {
  }


//CODIGO PARA MENSAJE DE ALERTA, SI QUIERE SALIR DE PAGINA
  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Salir',
      message: '¿Esta seguro que desea salir de la aplicacion?',
      buttons: ['No','Salir']
    });

    await alert.present();
  }

//CODIGO PARA MOSTRAR ANIMACION DE CARGANDO

  async presentLoading() {
    const loading = await this.LoadingCtrl.create({
      message: 'Bienvenido...',
      duration: 100,
    });
    
    await loading.present();
    
  }
  
  //CODIGO DONDE SE VALIDA LA SESION DEL USUARIO

  async ingresar(){

    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.correoelectonico == f.correoelectonico && usuario.contrasena == f.contrasena){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('pag-pri');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos puestos son invalidos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }

  }

  

}
