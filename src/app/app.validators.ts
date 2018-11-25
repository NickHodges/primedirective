import { ValidatorFn, AbstractControl } from '@angular/forms';

// Credit for this function:
// https://stackoverflow.com/a/17390131/2044
function isPrime(number) {
  let start = 2;
  const limit = Math.sqrt(number);
  while (start <= limit) {
    if (number % start++ < 1) {
      return false;
    }
  }
  return number > 1;
}

export class NumberValidators {
  static isPrimeNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (isPrime(control.value)) {
        return null;
      }
      return {
        isPrimeNumber: true
      };
    };
  }
}
