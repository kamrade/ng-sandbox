import { AnimationTriggerMetadata, trigger, style, state, query, transition, animate, animateChild } from '@angular/animations';

export class SidebarAnimation {

  static animations = SidebarAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      // TODO: it doesn't work. I don't know why.
      /*
      trigger('nestedTransition', [
        transition('* => *', [
          query('@*', animateChild(), {optional: true})
        ])
      ]),
      */
      trigger('sidebarSlideAnimation', [
        state('open', style({
          width: '300px'
        })),
        state('closed', style({
          width: 0
        })),
        transition('open => closed', [
          query('@sidebarFadeAnimation', [
            animateChild()
          ]),
          animate('.25s cubic-bezier(.2,.41,.47,.82)'),
        ]),
        transition('closed => open', [
          animate('.25s cubic-bezier(.2,.41,.47,.82)'),
          query('@sidebarFadeAnimation', [
            animateChild()
          ])
        ])
      ]),

      trigger('sidebarFadeAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(-40px)', opacity: 0 }),
          animate('.1s', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('.1s', style({ transform: 'translateX(-40px)', opacity: 0 }))
        ])
      ])
    ]
  }

}
