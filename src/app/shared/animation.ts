import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const slideInUpStateTrigger = trigger('slideInUpState', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(+100px)'
        }),
        animate('1000ms ease-in-out')]),
    ]
);

export const slideInRightStateTrigger = trigger('slideInRightState', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(+100px)'
        }),
        animate('1000ms ease-in-out')]),
    ]
);

export const slideInLeftStateTrigger = trigger('slideInLeftState', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate('1000ms ease-in-out')]),
    ]
);

export const flyInOutStateTrigger = trigger('flyInOutState', [
  state('in', style({
    width: 120,
    transform: 'translateX(0)', opacity: 1
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(0)',
      offset: 0
    }),
    group([
      animate('0.2s ease', style({
        opacity: 0.5,
        transform: 'translateX(120px)',
        offset: 0.1
      })),
      animate('0.3s ease', style({
        opacity: 1,
        transform: 'translateX(60px)',
        offset: 0.2
      })),
      animate('0.8s ease', style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })),
    ])
  ]),
  transition('* => void', [
    group([
      animate('0.1s ease', style({
        transform: 'translateX(20px)',
        opacity: 1
      })),
      animate('0.2s ease', style({
        transform: 'translateX(50px)',
        opacity: 0.6
      })),
      animate('0.5s ease', style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
    ])
  ])
]);

export const hoverStateTrigger = trigger('hoverState', [
  state('default', style({
    boxShadow: '2px 3px lightgray',
    backgroundColor: 'white'
  })),
  state('hover', style({
    boxShadow: '4px 6px lightgray',
    backgroundColor: 'rgba(103,58,183,0.43)',
    transform: 'translateX(-2px) translateY(-4px)'
  })),
  transition('default <=> hover', [
    animate(300)
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      stagger(300, [
        animate('500ms ease-in', keyframes([
          style({
            opacity: 0.5,
            transform: 'translateX(-10%)',
            offset: 0.4
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ], { optional: true })
  ])
]);

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(700, style({
      opacity: 1
    }))
  ])
]);
