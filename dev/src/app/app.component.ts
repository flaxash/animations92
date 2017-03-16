import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Animation } from './animation';
import { AnimationService } from './animation.service'

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{anim.titre}}</h2>`,
  providers: [AnimationService]
})

export class AppComponent implements OnInit { 
  title = 'Programme des animations - Atelier Canopé 92';
  animations: Animation[];
  anim : Animation;

  constructor(private animationService: AnimationService) { }
  
  getAnimations(): void {
    this.animations = this.animationService.getAnimations()
      //.then(animations => this.animations = animations);
    this.anim = this.animations[0];
  }
  
  ngOnInit(): void {
    this.getAnimations();
  }

}
