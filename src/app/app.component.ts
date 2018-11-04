
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.userActivatedSubject.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = !this.user1Activated;
        } else if (id === 2) {
          this.user2Activated = !this.user2Activated;
        }
      }
    );
  }

}
