import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {

  title = 'dmc-angular';

  constructor() { }

  ngOnInit(): void {
  }

}
