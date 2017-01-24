import { Component }                          from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar }  from '@angular/material';

import { QuestionService }                    from './forms/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService){
    this.questions = service.getQuestions();
  }
}
