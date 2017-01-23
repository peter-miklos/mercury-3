import { Injectable }         from '@angular/core';

import { DropdownQuestion }   from './question-dropdown';
import { TextboxQuestion }    from './question-textbox';
import { QuestionBase }       from './question-base';

@Injectable()
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        placeholder: 'your first name',
        required: true,
        type: 'text',
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        placeholder: 'your last name',
        required: true,
        type: 'text',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        placeholder: 'your email address',
        required: false,
        type: 'email',
        order: 4
      }),

      new DropdownQuestion({
        key: 'sex',
        label: 'Sex',
        options: [
          {key: 'female', value: 'Female'},
          {key: 'male', value: 'Male'}
        ],
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
