import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
   }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
