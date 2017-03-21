import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Animation } from './animation';
import { AnimationService } from './animation.service'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [AnimationService]
})

export class AppComponent implements OnInit { 
  titre = 'Programme des animations';
  sstitre =  'Atelier Canopé 92';
  animations: Animation[];
  anim : Animation;

  constructor(private animationService: AnimationService) { }
  
  getAnimations(): void {
     this.animationService
        .getAllAnimations()
        .then(animations => this.animations = animations);
    //console.log('animations : ',this.animations);

  }
  
  ngOnInit(): void {
    this.getAnimations();
  }

}
