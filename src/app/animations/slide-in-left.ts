import { AnimationTriggerMetadata, trigger, style, transition, animate } from '@angular/animations';

export class SlideInLeftAnimation {

  static animations = SlideInLeftAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('slideInLeftAnimation', [
        transition(':enter', [
          style({ width: 0 }),
          animate('.25s cubic-bezier(.2,.41,.47,.82)', style({ width: '300px' }))
        ]),
        transition(':leave', [
          style({ width: '300px' }),
          animate('.25s cubic-bezier(.2,.41,.47,.82)', style({ width: 0}))
        ])
      ])
    ]
  }

}
