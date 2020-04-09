import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-uhr',
  templateUrl: './edit-uhr.component.html',
  styleUrls: ['./edit-uhr.component.css']
})
export class EditUhrComponent implements OnInit {

  fontcolor: string;
  bgcolor: string;
  second = true;
  show = 'clock_and_date';
  dateformat: string = 'dd.MM.yyyy';
  fontfamily: string;

  constructor() { }

  ngOnInit(): void {

  }

}
