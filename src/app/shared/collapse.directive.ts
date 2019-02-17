import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  @HostBinding('class.show') isShown = false;

  constructor() {}
  @HostListener('click') toggleShow(eventData: Event) {
    this.isShown = !this.isShown;
    // console.log(eventData.target);
  }

}
