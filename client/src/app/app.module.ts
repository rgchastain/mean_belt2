import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { TriviaComponent } from './trivia/trivia.component';

import { UserNewComponent } from './user/user-new/user-new.component'
import { QuestionNewComponent } from './question/question-new/question-new.component'
import { TriviaNewComponent } from './trivia/trivia-new/trivia-new.component';

import { UserService } from './user.service';
import { QuestionService } from './question.service';
import { TriviaService } from './trivia.service';

import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { TriviaListComponent } from './trivia/trivia-list/trivia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    QuestionComponent,
    QuestionNewComponent,
    TriviaComponent,
    TriviaNewComponent,
    TriviaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

  ],
  providers: [UserService, QuestionService, TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
