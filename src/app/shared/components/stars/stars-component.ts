/**
 * Created by Admin on 11/17/2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'stars',
  styles: [],
  template: require('./stars.template.html')
})

export class StarsComponent implements OnInit{
  @Input('value') starValue:number;
  @Input('canEdit') canEdit:boolean;

  @Output('starValueChanged')
  starValueChanged:EventEmitter<number> = new EventEmitter<number>();
  private tempStarValue:number;

  constructor(){

  }

  ngOnInit(){
    if(this.starValue){
      this.tempStarValue = this.starValue;
    }
  }

  getStar(starNumber){
    if(this.tempStarValue >= starNumber){
      return 'star';
    }
    else if (starNumber - 0.5 <= this.tempStarValue) {
      return 'star_half';
    }
    else {
      return 'star_border';
    }
  }

  updateStar(event, starNumber){
    event.stopPropagation();
    if(starNumber == 0){
      this.tempStarValue = 0;
      return;
    }
    let target = event.target;
    let width = parseFloat(window.getComputedStyle(target, null).getPropertyValue('font-size'));
    let bounds = target.getBoundingClientRect();
    var x = event.clientX - bounds.left;


    if(x < width * 0.05) {
      this.tempStarValue = starNumber - 1;
    }
    if(x > width * 0.05 && x < width){
      this.tempStarValue = starNumber - 0.5;
    }
    else if (x > width){
      this.tempStarValue = starNumber;
    }

  }

  resetTemp(){
    this.tempStarValue = this.starValue;
  }

  setStarValue(){
    this.starValue = this.tempStarValue;

    this.starValueChanged.emit(this.starValue);
  }
}
