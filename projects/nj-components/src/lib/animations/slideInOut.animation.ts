import { trigger, transition, animate, style } from '@angular/animations'

export const slideInOut = 
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('2000ms ease-in', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      animate('2000ms ease-in', style({transform: 'translateY(-100%)'}))
    ])
  ])