/**
 * Created by Admin on 11/14/2016.
 */
import {Component} from '@angular/core';
import {NavLogoComponent} from "../shared/navbar/nav-logo/nav-logo.component";

@Component({
  selector: 'home',
  styles: [require('./home.style.css')],
  template: require('./home.template.html')
})

export class HomeComponent {
  dataArray = {type: 'movie', data: [{title: 'Fantastic Beasts, and Where to Find Them', rating: 'PG-13', image: 'http://cdn1-www.comingsoon.net/assets/uploads/gallery/fantastic-beasts-and-where-to-find-them/fantasticbig.jpg', stars: 4.8 }, {title: 'Arrival', image: 'http://i2.wp.com/pmcvariety.files.wordpress.com/2016/08/arrival_hk.jpg?crop=0px%2C1188px%2C1312px%2C730px&resize=670%2C377&ssl=1', rating: 'PG-13', stars: 3.2}]};
  constructor(){}


}
