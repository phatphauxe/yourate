import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {routing} from "./app-routing.module";
import {NavLogoComponent} from "./shared/navbar/nav-logo/nav-logo.component";
import {NavLinkComponent} from "./shared/navbar/nav-link-list/nav-link.component";
import {NavSearchComponent} from "./shared/navbar/nav-search/nav-search.component";
import {ReviewCardComponent} from "./shared/components/review-card/review-card.component";
import {MovieCardComponent} from "./shared/components/review-card/movie-card/movie-card.component";
import {StarsComponent} from "./shared/components/stars/stars-component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLogoComponent,
    NavLinkComponent,
    NavSearchComponent,
    ReviewCardComponent,
    MovieCardComponent,
    StarsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
