import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  	this.user = new User();
  	this.user = this._userService.currentUser
  }

}
