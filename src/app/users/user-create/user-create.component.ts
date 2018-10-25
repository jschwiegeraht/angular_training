import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.class';
import { UserService} from '../user.service';
import { JsonResp } from 'src/app/jsonresponse.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  save(): void{
    this.usersvc.create(this.user)
      .subscribe(JsonResp => {
        console.log(JsonResp);
        if (JsonResp.rc == 200) {
          this.router.navigateByUrl('/users/list');
        } else {
          //display error message
        }
      })
  }


  constructor(private usersvc: UserService, private router: Router) { }

  ngOnInit() {
    
  }

}
