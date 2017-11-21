import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { TriviaComponent } from './trivia/trivia.component'
import { TriviaListComponent } from './trivia/trivia-list/trivia-list.component'
import { QuestionComponent } from './question/question.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { TriviaNewComponent } from './trivia/trivia-new/trivia-new.component';

const routes: Routes = [
	{ path: 'user', component: UserComponent, children: [
		{ path: 'new', component: UserNewComponent }
	]},
	{ path: '', pathMatch: 'full', component: UserComponent, children: [
		{ path: '', component: UserNewComponent}
	]},

	{ path: 'dashboard', component: TriviaComponent, children: [
		{ path: '', component: TriviaListComponent},
		{ path: 'quiz', component: TriviaNewComponent}
	]},

	{ path: 'question', component: QuestionComponent, children: [
		{ path: '', component: QuestionNewComponent}
	]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
