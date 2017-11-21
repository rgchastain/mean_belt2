import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { Question } from '../../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
question: Question;

  constructor(
  		private _questionService: QuestionService,
		private _router: Router
  	) { }

  ngOnInit() {
  	this.question = new Question();
  }

  onSubmit() {
  	this._questionService.createQuestion(this.question, (question) => {
  		console.log
  	})
  	this.question = new Question();

  	this._router.navigateByUrl('/dashboard');
  }

}
