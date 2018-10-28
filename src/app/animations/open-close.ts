import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';

const $gray100 = '#EDF1F6';
const $gray300 = '#D7DBE2';

export class OpenCloseAnimation {

  static animations = OpenCloseAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('openClose', [
        state('open', style({
          height: '200px',
          opacity: 1
        })),
        state('closed', style({
          height: '80px',
          opacity: 0.5,
        })),
        transition('open => closed', [
          animate('0.15s')
        ]),
        transition('closed => open', [
          animate('0.15s')
        ])
      ]),
      trigger('darkLight', [
        state('dark', style({
          backgroundColor: $gray300
        })),
        state('light', style({
          backgroundColor: $gray100
        })),
        transition('* => dark', [
          animate('0.5s')
        ]),
        transition('* => light', [
          animate('0.5s')
        ]),
      ])
    ]
  }

}
