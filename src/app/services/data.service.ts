import { Injectable } from '@angular/core';

@Injectable()
export class DataService {


  constructor() { }

  public getMessage(): string {
    return "coucou o";
  }


}
