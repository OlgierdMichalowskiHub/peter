import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  constructor() { }

  public daysToGames: number;
  private gamesDate = new Date('feb 25, 2021 00:00:00').getTime();

  ngOnInit() {
    this.calculateCountDownToGames();
  }

  private calculateCountDownToGames() {
    const now = new Date().getTime();
    const t = this.gamesDate - now;
    this.daysToGames = Math.floor(t / (1000 * 60 * 60 * 24));
  }

}
