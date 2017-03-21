import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }  from './app.component';
import { AnimationService } from './animation.service';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FlexLayoutModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AnimationService]
})
export class AppModule { }
