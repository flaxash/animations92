import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


import { Animation } from './animation';

@Injectable()
export class AnimationService {

   //private animationsUrl = 'https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/animations.json;
   private animationsUrl = 'json/animations.json';
   constructor(private http: Http) {}

   
    getAllAnimations(): Promise<Animation[]> {
        console.log('http request begining ...');
        return this.http.get(this.animationsUrl)
               .toPromise()
               .then(response => response.json() as Animation[])
               .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}