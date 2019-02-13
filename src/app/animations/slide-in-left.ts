import { AnimationTriggerMetadata, query, group, trigger, style, transition, animate } from '@angular/animations';

export class SlideInLeftAnimation {

  static animations = SlideInLeftAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('slideInLeftAnimation', [

        transition(':enter', [
          style({ transform: 'translateX(-100%)', position: 'fixed', width: '100%' }),
          animate('.35s cubic-bezier(.2,.41,.47,.82)', style({ transform: 'translateX(0%)' }))
        ]),

        transition(':leave', [
          style({ position: 'fixed', width: '100%' }),
          animate('.35s cubic-bezier(.2,.41,.47,.82)', style({ transform: 'translateX(100%)', position: 'fixed', width: '100%'  }))
        ])

      ])
    ]
  }

}
