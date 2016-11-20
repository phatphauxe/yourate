/**
 * Created by Admin on 11/14/2016.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'yr-navbar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./navbar.style.css')],
  template: require('./navbar.template.html'),
})

export class NavbarComponent {
  constructor(){

  }
}
