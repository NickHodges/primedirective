import { ValidatorFn, AbstractControl } from '@angular/forms';

// Credit for this function:
// https://stackoverflow.com/a/17390131/2044
function isPrime(aNumber: number): boolean {
  let start: number = 2;
  const limit: number = Math.sqrt(aNumber);
  while (start <= limit) {
    if (aNumber % start++ < 1) {
      return false;
    }
  }
  return aNumber > 1;
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

  // You could add more NumberValidator functions here.....
}
