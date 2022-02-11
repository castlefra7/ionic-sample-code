import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platdetails',
  templateUrl: './platdetails.component.html',
  styleUrls: ['./platdetails.component.scss'],
})
export class PlatdetailsComponent implements OnInit {
id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {this.id = params['id']});
  }

  ngOnInit() {
    console.log("hi");
  }

}
