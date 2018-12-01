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
  title: string = 'The Prime Directive';
  noPrimeInput: FormControl;
  showLabel: boolean = false;
  inputValue: number = 0;

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.noPrimeInput = new FormControl('', [
      Validators.required,
      NumberValidators.isPrimeNumber()
    ]);

    this.formModel = this.fb.group({
      noPrimeInput: this.noPrimeInput
    });
  }

  onSubmit(): void {
    this.inputValue = this.formModel.value.noPrimeInput;
    this.showLabel = true;
  }

  onFocus(): void {
    this.showLabel = false;
  }

  onReset(): void {
    this.showLabel = false;
  }
}
