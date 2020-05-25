import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Event } from '../shared/client-enums';
import * as socketIo from 'socket.io-client';
import { Message } from '../shared/message';

const SERVER_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }
  private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public verify(apikey: string): void {
      this.socket.emit('verified', apikey);
  }

  public schreibt(username: string): void {
    this.socket.emit('is writing', username);
}

public stopptSchreibt(username: string): void {
  this.socket.emit('is not writing', username);
}

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onAllMessages(): Observable<Array<Message>> {
      return new Observable<Array<Message>>(observer => {
          this.socket.on('allmessages', (data: Array<Message>) => observer.next(data));
      });
  }

    public onEvent(event: Event): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(event, (data: any) => observer.next(data));
        });
    }
}
