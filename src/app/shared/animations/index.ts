import { trigger, animate, style, transition, } from '@angular/animations';

export const Animations = [
  trigger('slideInLeft', [
    transition('void => *', [
      style({
        transform: 'translateX(100%)'
      }),
      animate('300ms ease-in',
        style({
            transform: 'translateX(0)'
        })
      )
    ]),
    transition('* => void', [
      style({
        transform: 'translateX(0)'
      }),
      animate('300ms ease-in',
        style({
          transform: 'translateX(-100%)'
        })
      )
    ]),
  ]),

  trigger('slideInRight', [
    transition('void => *', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('300ms ease-in',
        style({
          transform: 'translateX(0)'
        })
      )
    ]),
    transition('* => void', [
      style({
        transform: 'translateX(0)'
      }),
      animate('300ms ease-in',
        style({
          transform: 'translateX(100%)'
        })
      )
    ])
  ]),    
];
