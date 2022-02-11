import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss'],
})
export class LocalisationComponent implements OnInit {
  longitude: Number;
  latitude: Number;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.longitude = resp.coords.longitude;
      this.latitude = resp.coords.latitude;
    })
      .catch(err => {
        console.log(err)
      });
  }

  setCoordinates(event) {
    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.longitude = resp.coords.longitude;
      this.latitude = resp.coords.latitude;
    })
      .catch(err => {
        console.log(err)
      });
  }

}
