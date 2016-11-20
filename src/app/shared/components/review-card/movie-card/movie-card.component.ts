/**
 * Created by Admin on 11/17/2016.
 */
import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'movie-card',
  styles: [require('./movie-card.style.css')],
  template: require('./movie-card.template.html')
})


export class MovieCardComponent implements OnInit{

  @Input('movie') movie:any;

  image:any;
  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(){
    this.image = this.sanitizer.bypassSecurityTrustUrl(this.movie.image);
  }
  getRating(){
    if(this.movie.rating){
      return this.movie.rating;
    }
    else{
      return 'Not Rated';
    }
  }
}
