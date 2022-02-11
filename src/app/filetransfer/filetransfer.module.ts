import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiletransferComponent } from './filetransfer.component';
import { AlertController, IonicModule } from '@ionic/angular';
import { FiletransferRoutingModule } from './filetransfer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';


@NgModule({
  declarations: [FiletransferComponent],
  imports: [
    CommonModule,
    FiletransferRoutingModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, AlertController,
    FileTransfer,
    FileChooser
  ]
})
export class FiletransferModule { }
