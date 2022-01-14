import { NgModule } from '@angular/core';

import { CustomIfDirective } from './directives/custom-if.directive';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    CustomIfDirective,
    ErrorMsgDirective
  ],
  exports: [
    CustomIfDirective,
    ErrorMsgDirective
  ]
})
export class SharedModule { }
