import { User } from '../../messaging-comp/shared/user';

export interface Response {
  status: string;
  body: User;
}
