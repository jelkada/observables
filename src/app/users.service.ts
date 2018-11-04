import { Subject } from 'rxjs/Subject';

import { UserType } from './user-type';

export class UsersService {

  userActivatedSubject = new Subject();

  customEventSubject  = new Subject<UserType>();
}
