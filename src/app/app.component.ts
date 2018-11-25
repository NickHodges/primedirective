import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NumberValidators } from './app.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Prime Directive';
  noPrimeInput: FormControl;
  showLabel = false;
  inputValue = 0;

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.noPrimeInput = new FormControl('', [
      Validators.required,
      NumberValidators.isPrimeNumber()
    ]);

    this.formModel = this.fb.group({
      noPrimeInput: this.noPrimeInput
    });
  }

  onSubmit() {
    this.inputValue = this.formModel.value.noPrimeInput;
    this.showLabel = true;
  }

  onFocus() {
    this.showLabel = false;
  }
}
