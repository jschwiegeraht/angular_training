import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Observable } from 'rxjs';
import { JsonResp } from '../../jsonresponse.class';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(jsonresp => {
          console.log(jsonresp);
          this.users = jsonresp.data;
      });
  }

}
