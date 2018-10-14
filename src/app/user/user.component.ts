import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {

  // user: { name: string }; //! error cannot read name property
  userObj = { myName: '' };
  isLoggedIn = false;
  surName: string;

  constructor(private userService: UserService,
    private dataService: DataService) { }

  ngOnInit() {
    // assinging the userObj synchronously
    this.userObj.myName = this.userService.user.name;

    // assinging the userObj asynchronously (callback/promise)
    this.dataService.getSurNameFromBackend().then((data: string) => this.surName = data);
  }


}
