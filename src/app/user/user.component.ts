import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.usersService.userActivatedSubject.next(this.id);
  }

  onAddUser(obj) {
    console.log('user.component.ts >>  obj.id: ' + obj.id + ' / obj.name: ' + obj.name);
    // dispatch/emit the event to whomever is listening (home component)
    this.usersService.customEventSubject.next(obj);
  }

}
