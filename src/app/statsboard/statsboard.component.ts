import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-statsboard',
  templateUrl: './statsboard.component.html',
  styleUrls: ['./statsboard.component.scss']
})
export class StatsboardComponent implements OnInit {

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit() {
    this.infoService.doStuff();
  }

}
