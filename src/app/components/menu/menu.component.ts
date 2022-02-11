import { Component, OnInit } from '@angular/core';
import { Plat } from '../../models/plat.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
 plats: Plat[];

  constructor() {
    // TODO get this from a data service
    this.plats = [
      new Plat("poulet grillé", 15000),
      new Plat("poulet panné", 17500),
      new Plat("spaghetti bolognaise", 17500),
      new Plat("spaghetti carbonara", 17500),
      new Plat("poulet farci", 17500),
      new Plat("henakisoa sy ravitoto", 17500),

    ];
  }

  ngOnInit() {

  }


  listePlatsCommander() {
    let result = this.plats.filter(p => p.estCommander);
    console.table(result);
  }

  refresh(ev) {
    setTimeout(() => {
      this.plats = [
        new Plat("poulet grillé", 15000),
        new Plat("poulet panné", 17500),
        new Plat("spaghetti bolognaise", 17500),
        new Plat("spaghetti carbonara", 17500),
        new Plat("poulet farci", 17500),
        new Plat("henakisoa sy ravitoto", 17500),
        new Plat("poulet laqué", 25000),
  
      ];
      ev.detail.complete();
      
    }, 3000);
  }

}
