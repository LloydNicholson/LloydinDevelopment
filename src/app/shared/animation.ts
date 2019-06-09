import {
  animate,
  animation,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const slideInUpStateTrigger = trigger('slideInUpState', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate('1000ms ease-in-out')]),
    ]
);

export const slideInRightStateTrigger = trigger('slideInRightState', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
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
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)'
  })),
  state('hover', style({
    boxShadow: '0 10px 50px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(103,58,183,0.43)',
    transform: 'translateX(-1px) translateY(-1px)'
  })),
  transition('default <=> hover', [
    animate('300ms ease-in-out')
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      stagger('300ms', [
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
  transition('* => *', [
    group([
      query(':enter', [
        style({
          opacity: 0
        }),
        animate('500ms ease-out'),
      ], { optional: true }),
      query(':leave', [
        animate('500ms ease-out', style({
          opacity: 0
        }))
      ], { optional: true })
    ])
  ])
]);

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}', style({
    height: '200px',
    backgroundColor: 'green'
  }))
], { params: { height: '100px', opacity: 0, backgroundColor: 'red' } });
