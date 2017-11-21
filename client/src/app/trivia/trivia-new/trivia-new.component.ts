import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { TriviaService } from '../../trivia.service';
import { Question } from '../../question';
import { Router } from '@angular/router';
import { Trivia } from '../../trivia';



@Component({
  selector: 'app-trivia-new',
  templateUrl: './trivia-new.component.html',
  styleUrls: ['./trivia-new.component.css']
})
export class TriviaNewComponent implements OnInit {
	trivia: Trivia;
	currentUser = this._userService.currentUser
  	questions: Question[] = []
  constructor(
  		private _userService: UserService,
  		private _triviaService: TriviaService,
  		private _router: Router
  	) { }

  ngOnInit() {
  	this.trivia = new Trivia();
  	this._triviaService.retrieveQuestions((questions) => {
  		this.questions = questions.questions
  	}, console.log)
  }

  onSubmit(){
  	this._triviaService.createTrivia(this.trivia, (trivia) => {
  		console.log
  	})
  	this.trivia = new Trivia();
  	this._router.navigateByUrl('/dashboard');
  }

}
