import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { User } from './shared/user';
import { Action } from './shared/client-enums';
import { Event } from './shared/client-enums';
import { SocketService } from './services/socket.service';
import { Message } from './shared/message';
import { ActivatedRoute } from '@angular/router';
import { formatDate, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

@Component({
  selector: 'app-messaging-comp',
  templateUrl: './messaging-comp.component.html',
  styleUrls: ['./messaging-comp.component.css']
})
export class MessagingCompComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() apikey: string;
  @Input() fontFamily: string;
  @Input() namecolor: string;
  @Input() bgcolor: string;


  messageText: string;
  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;
  username: string;
  schreib = false;
  container: any;

  constructor(private socketService: SocketService, private route: ActivatedRoute) {
    registerLocaleData(localeDe);
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.ngOnInit();
  }
  ngAfterViewInit(): void {
    this.container = document.getElementById('messages');
    this.container.scrollTop = this.container.scrollHeight;
   }

  ngOnInit(): void {

    if (!this.bgcolor || this.bgcolor === '') {
      this.bgcolor = 'black';
    }

    if (!this.fontFamily || this.fontFamily === '') {
      this.fontFamily = 'fantasy';
    }

    if (!this.namecolor || this.namecolor === '') {
      this.namecolor = 'green';
    }

    if (!this.apikey || this.apikey === '') {
      this.route.data.subscribe( d => {
        if (!this.apikey || this.apikey === '') {
          this.apikey = d.apikey;
        }
      });
      this.route.params.subscribe( d => {
        if (!this.apikey || this.apikey === '') {
          this.apikey = d.apikey;
        }
      });
    }

    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.socketService.verify(this.apikey);
    this.socketService.onEvent(Event.USER_INFO)
      .subscribe((user: User) => {
        const parsedUser = JSON.parse(JSON.stringify(user));
        this.user = JSON.parse(parsedUser);
      });

    this.socketService.onEvent(Event.SCHREIBT)
      .subscribe((username: string) => {
        this.username = username;
        this.schreib = true;
      });

    this.socketService.onEvent(Event.NOTSCHREIBT)
      .subscribe((username: string) => {
        console.log(this.username === username)
        if (this.username === username) {
          this.username = '';
          this.schreib = false;
        }
      });

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
        this.container = document.getElementById('messages');
        this.container.scrollTop = this.container.scrollHeight;
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onAllMessages()
      .subscribe((messages: Array<Message>) => {
        this.messages = messages;
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    const date = new Date();
    const toSend = new Message(this.user, message, formatDate(date, 'H:mm', 'de'));
    this.socketService.send(toSend);
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = new Message(this.user, action.toString(), '15:00');
    } else if (action === Action.RENAME) {

    }

    this.socketService.send(message);
  }
  send() {
    this.sendMessage(this.messageText);
    this.messageText = '';
  }

  onSchreibt() {
    this.socketService.schreibt(this.user.name);
  }

  stopptSchreibt() {
    this.socketService.stopptSchreibt(this.user.name);
  }
}
