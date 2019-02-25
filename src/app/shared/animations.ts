import {animate, state, style, transition, trigger} from '@angular/animations';

export class Animations {
  static slideInUp = trigger('slideInUp', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(+50px)'
        }),
        animate('500ms ease-in-out')]),
    ]
  );
  static slideInRight = trigger('slideInRight', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(+50px)'
        }),
        animate('500ms ease-in-out')]),
    ]
  );

  static slideInleft = trigger('slideInLeft', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        animate('500ms ease-in-out')]),
    ]
  );
}
