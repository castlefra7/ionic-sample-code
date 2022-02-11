import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, public authService: AuthService, private alertCtrl: AlertController) {
    this.myForm = this.fb.group({
      'user': ['user'],
      'pwd': ['pwd']
    });
    this.message = '';
  }

  ngOnInit() {}

  async onLogin() {
    const logUser = this.myForm.value;
    if(!this.authService.login(logUser.user, logUser.pwd)) {
      let alert = await this.alertCtrl.create({
        header: 'Erreur',
        subHeader: 'Coordonnées non valides',
        message:'Veuillez vérifier vos coordonnées!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

 async onLogout() {
    if(this.authService.logout()) {
      let alert = await this.alertCtrl.create({
        header: 'Information',
        subHeader: 'Déconnexion',
        message:'Vous êtes déconnectés avec succès!',
        buttons: ['OK']
      });
      await alert.present();
    }

  }

}
