/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import {Events} from "@wailsio/runtime";

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

function Dummy() {

  //Uncomment either piece of code to make the time-charts event in charts.component.ts

  // console.log(Events.WailsEvent)

  // Events.On ("", () => {
  // })
}
