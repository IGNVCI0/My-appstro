import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //DECLARACION DE VARIABLES 

  formularioRegistro: FormGroup;

  //CONSTRUCTOR PARA FORMULARIO DE REGISTRO

  constructor(private AlertCtrl: AlertController, private LoadingCtrl: LoadingController, public fb: FormBuilder,public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correoelectronico': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'confirmcontrasena': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  //CODIGO PARA GUARDAR USUARIO
  
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Ingrese todos los campos',
        buttons: ['Aceptar']
        });
        await alert.present();
        return ;

    }

    var usuario = {
      nombre: f.nombre,
      correoelectonico:f.correoelectonico,
      contrasena: f.contrasena,
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

  }

}
