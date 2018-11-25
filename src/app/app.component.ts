import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumberValidators } from './app.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Prime Directive';

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formModel = this.fb.group({
      noPrimeInput: [
        '',
        [Validators.required, NumberValidators.isPrimeNumber()]
      ]
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log('valid:', this.formModel.value);
    } else {
      console.log('invalid: ', this.formModel.value);
    }
  }
}
