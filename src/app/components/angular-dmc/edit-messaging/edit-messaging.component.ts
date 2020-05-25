import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './services/user.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Copy this code snippet and paste it into your Website</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>copy this code</strong></p>
      <br>
      <br>
      <p> {{code}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContentComponent {
  @Input() code;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-edit-messaging',
  templateUrl: './edit-messaging.component.html',
  styleUrls: ['./edit-messaging.component.css']
})
export class EditMessagingComponent implements OnInit {

  name: string;
  logo: string;
  apikey: string;


  namecolor: string;
  bgcolor: string;
  fontfamily: string;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.namecolor = 'green';
    this.bgcolor = 'black';
    this.fontfamily = 'fantasy';

  }

  createUser() {
    if (this.name && this.logo && this.name !== '' && this.logo !== '') {
      this.userService.createUser(this.name, this.logo).subscribe((data) => {
        if (data.status === '200') {
          this.apikey = data.body.apiKey;
        }
      });
    }
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.code = `
    <script scr="test.js"></script>
    <angular-chat-comp
    apikey="${this.apikey}"
    namecolor="${this.namecolor}"
    bgcolor="${this.bgcolor}"
    fontFamily="${this.fontfamily}">
    </angular-chat-comp>
    `;
  }

}
