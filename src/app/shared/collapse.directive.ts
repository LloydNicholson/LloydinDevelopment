import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  @HostBinding('class.show') isShown = false;

  constructor(private elRef: ElementRef) {}
  @HostListener('click') toggleShow() {
    this.isShown = !this.isShown;
    console.log(this.elRef.nativeElement.getElementsByTagName('li'));
  }
}
