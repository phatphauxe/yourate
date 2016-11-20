/**
 * Created by Admin on 11/17/2016.
 */
import {Component, Input} from '@angular/core';


@Component({
  selector: 'review-card',
  styles: [],
  template: require('./review-card.template.html')
})
export class ReviewCardComponent{
  @Input ('data') data:any;
  @Input('cardType') cardType:string;

  constructor(){
  }

  newStarValue(value){
    console.log(value);
  }
}
