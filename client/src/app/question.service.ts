import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question';
import { UserService } from './user.service';
import { User } from './user';

@Injectable()
export class QuestionService {
questions: Question[] = []

	constructor(
  		private _http: Http,
		private _userService: UserService,
	) { }

  createQuestion(question: Question, callback): void {

		this._http.post('/questions', question).subscribe(
			(res) => {
				const question = res.json();
				console.log(this.questions)
				this.questions.push(question);
				callback(question);
			},
			(err) => {

			}
		)
	}

}
