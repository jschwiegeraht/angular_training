import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from 'src/app/jsonresponse.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;

  save(): void {
    this.usersvc.change(this.user)
      .subscribe(JsonResp => {
        console.log(JsonResp);
        if (JsonResp.rc === 200) {
          this.router.navigateByUrl('/users/list');
          console.log(this.route);
        } else {
          //display error message
        }
      })
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(JsonResp => {
        console.log(JsonResp);
        this.user = JsonResp.data;
      })    
  }

}
