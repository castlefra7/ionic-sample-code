import { Component, Input, OnInit } from '@angular/core';
import { Plat } from '../../models/plat.model';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss'],
})
export class PlatComponent implements OnInit {
  @Input() plat: Plat;

  constructor() { }

  ngOnInit() { }

  incQte() {
    this.plat.incQte();
    return false;
  }

  decQte() {
    this.plat.decQte();
    return false;
  }

  commander() {
    this.plat.commander();
    return false;
  }
}
