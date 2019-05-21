import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  doStuff() {
    console.log('doing stuff');
  }
}
