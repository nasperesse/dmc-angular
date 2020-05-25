export enum Action {
  JOINED,
  LEFT,
  RENAME
}

// Socket.io events
export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  USER_INFO = 'userinfo',
  SCHREIBT = 'is writing',
  NOTSCHREIBT = 'is not writing'
}
