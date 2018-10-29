import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { IconCamera, IconHeart, IconGithub, IconMenu } from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub,
  IconMenu
];

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  exports: icons
  // declarations: []
})
export class IconsModule { }
