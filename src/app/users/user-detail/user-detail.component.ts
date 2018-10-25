import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from 'src/app/jsonresponse.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute
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
