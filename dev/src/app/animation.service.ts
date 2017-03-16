import { Injectable } from '@angular/core';
import { Animation } from './animation';

@Injectable()
export class AnimationService {
   anims: Array<Animation> = new Array();
   anim: Animation;
   getAnimations(): Animation[] {
        //todo
        this.anims[0]= {
            nid: 1,
            titre: 'Apprendre avec les jeux sérieux',
            categorie: 'Conférence',
            doc: 'string',
            horaires: '10h-16h',
            jour: 31,
            mois: 'Mars',
            type: 'Mercredi du numérique',
            image: 'string',
            infos: 'description plus complète de cette animation et de ses contenus'
        };
        return this.anims;
    }
}