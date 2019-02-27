import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';
  @ViewChild('collapseDiv') collapseDiv: ElementRef;
    constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  onNextPage(event: Event) {
    this.renderer.removeClass(this.collapseDiv.nativeElement, 'show');
  }
}
