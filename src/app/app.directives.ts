// Origingally aken from https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts
// Used under the MIT License

import { Directive, ElementRef, HostListener } from '@angular/core';
import { KeyValues } from './app.consts';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[numbersonly]'
})
export class NumbersOnlyDirective {
  inputElement: HTMLElement;
  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    // if CTRL or CMD (Mac) key is down, then let cut/copy/paste through
    if (e.ctrlKey === true || e.metaKey === true) {
      if (KeyValues.cutPasteKeys.indexOf(e.keyCode) !== -1) {
        return;
      }
    }

    // if the key is navigation key, let it through
    if (
      KeyValues.navigationKeys.indexOf(e.keyCode) !== -1 ||
      KeyValues.OkForInputControl.indexOf(e.keyCode) !== -1
    ) {
      return;
    }

    // If they key is a number, prevent default
    if (!(KeyValues.Numbers.indexOf(e.keyCode) !== -1)) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData
      .getData('text/plain')
      .replace(/\D/g, ''); // get a digit-only string
    document.execCommand('insertText', false, pastedInput);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    const textData = event.dataTransfer.getData('text').replace(/\D/g, '');
    this.inputElement.focus();
    document.execCommand('insertText', false, textData);
  }
}
