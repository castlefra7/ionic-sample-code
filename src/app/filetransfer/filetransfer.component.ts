import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';


@Component({
  selector: 'app-filetransfer',
  templateUrl: './filetransfer.component.html',
  styleUrls: ['./filetransfer.component.scss'],
})
export class FiletransferComponent implements OnInit {
  private file: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController,
     private transfer: FileTransfer,
    private fileChooser: FileChooser
    ) {
    this.file = this.formBuilder.group({
      filePath: ['']
    });
  }

  ngOnInit() {
    // this.upload("file://Books/notes.txt");
  }

  upload(uri) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    // const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file_to_upload',
      fileName: 'name.jpg',
      mimeType: "image/jpeg",
    };
    
    fileTransfer.upload(uri, encodeURI('http://192.168.88.32/pictures/upload'), options)
      .then((data) => {
        this.presentAlert("succès",JSON.stringify(data));
      }).catch(err  => {
        this.presentAlert("erreur", JSON.stringify(err));
      });
  }

  async presentAlert(title, mess) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: 'Subtitle',
      message: mess,
      buttons: ['OK']
    });

    await alert.present();
  }

  chooseFile() {
    
    this.fileChooser.open()
      .then(uri => {
        console.log("---ato---------------------------------");
        console.log(uri);
        this.upload(uri);
      })
      .catch(e => console.log(e));
  }

}
