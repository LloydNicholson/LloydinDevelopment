import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRemoveCollapse]'
})
export class RemoveCollapseDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') clickedArea() {
    // this.renderer.removeClass(this.elRef.nativeElement.children[0], 'show');
    console.log(this.elRef.nativeElement);
  }

}
