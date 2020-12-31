import { trigger, animate, style, transition, animation, useAnimation, } from '@angular/animations';

const customAnimation = animation([
  style({
    opacity  : '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay   : '0ms',
    opacity : '0',
    scale   : '1',
    x       : '0',
    y       : '0',
    z       : '0'
  }
});

export const Animations = [

  trigger('animate', [
    transition('void => *', 
      [useAnimation(customAnimation)]
    )
  ]),

  trigger('slideLeftRight', [
    transition("void => left", [
      style({
        transform: 'translateX(100%)'
      }),
      animate('300ms ease-in',
        style({
            transform: 'translateX(0)'
        })
      )
    ]),

    transition("void => right", [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('300ms ease-in',
        style({
          transform: 'translateX(0)'
        })
      )
    ])
  ]),  
];
