import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-uhr-comp',
  templateUrl: './uhr-comp.component.html',
  styleUrls: ['./uhr-comp.component.css']
})
export class UhrCompComponent implements OnInit, OnDestroy {

  today: Date;
  hour = 'H';
  minute = ':mm';
  second = ':ss';
  subscription: Subscription;
  @Input() backcolor: string;
  @Input() scolor: string;
  @Input() showsecond: boolean = true;
  @Input() whatshow: string;
  @Input() dateformat: string = 'dd.MM.yyyy';
  @Input() fontfamily: string;

   onlydate: boolean;
   onlyclock: boolean;


   constructor() {}

  ngOnInit() {
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

    this.today = new Date();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
