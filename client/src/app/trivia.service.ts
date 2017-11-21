import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question';
import { Trivia } from './trivia'
import { UserService } from './user.service';
import { User } from './user';
import { QuestionService } from './question.service';

@Injectable()
export class TriviaService {
	trivias: Trivia[] = []
	questions: Question[] = []

  constructor(
  	private _http: Http,
  	private _userService: UserService,
  	private _questionService: QuestionService
  ) { }

  retrieveQuestions(callback, errorback): void {
  	this._http.get('/questions').subscribe(
  		(res) => {
  			this.questions = res.json();
  			callback(this.questions);
  		},
  		(err) => {
  			errorback(err);
  		}
  	)
  }

  createTrivia(trivia: Trivia, callback): void {
  	this._http.post('/trivias', trivia).subscribe(
  		(res) => {
  			const trivia = res.json();
  			console.log(this.trivias)
  			this.trivias.push(trivia);
  			callback(trivia)
  		},
  		(err) => {

  		}
  	)
  }

}
