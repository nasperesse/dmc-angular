import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-uhr-comp',
  templateUrl: './uhr-comp.component.html',
  styleUrls: ['./uhr-comp.component.css']
})
export class UhrCompComponent implements OnInit, OnDestroy {

  constructor() { }

  today: Date;
  dateformat: string;
  hour = 'H';
  minute = ':mm';
  second = ':ss';
  subscription: Subscription;
  @Input() backcolor: string;
  @Input() scolor: string;
  @Input() showsecond: boolean;
  @Input() whatshow: string;

   onlydate: boolean;
   onlyclock: boolean;


  ngOnInit() {
    this.dateformat = this.hour + this.minute + this.second;
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.uhrZeit());
  }
  uhrZeit() {
    this.onlyclock = true;
    this.onlydate = true;

    if (this.whatshow === 'only_clock') {
      this.onlydate = false;
    }
    if (this.whatshow === 'only_date') {
      this.onlyclock = false;
    }

    this.dateformat = this.hour + this.minute + this.second;

    if (this.showsecond === false) {
      this.dateformat = this.hour + this.minute;
    }
    this.today = new Date();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
