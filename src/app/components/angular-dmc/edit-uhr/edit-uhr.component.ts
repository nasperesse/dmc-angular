import { Component, OnInit } from '@angular/core';
import { NgbdModalContentComponent } from '../edit-messaging/edit-messaging.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-uhr',
  templateUrl: './edit-uhr.component.html',
  styleUrls: ['./edit-uhr.component.css']
})
export class EditUhrComponent implements OnInit {

  fontcolor: string;
  bgcolor: string;
  second: boolean;
  show: string;
  dateformat: string;
  fontfamily: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.second = true;
    this.fontcolor = '#060305';
    this.bgcolor = '#add8e6';
    this.fontfamily = 'Times';
    this.dateformat = 'dd.MM.yyyy';
    this.show = 'clock_and_date';
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.code = `
    <script scr="test.js"></script>
    <angular-uhr-comp
    scolor="${this.fontcolor}"
    backcolor="${this.bgcolor}"
    dateformat="${this.dateformat}"
    fontfamily="${this.fontfamily}"
    showsecond="${this.second}"
     whatshow="${this.show}">
    </angular-uhr-comp>

    `;
  }

}
