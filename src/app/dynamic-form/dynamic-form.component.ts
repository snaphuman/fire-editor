import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }         from '@angular/forms';

import { QuestionBase } from "../question/question-base";

import { QuestionControlService } from "../question-control.service";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {

   }

  ngOnInit() {
      this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(JSON.stringify(this.form.value))
  }
}
