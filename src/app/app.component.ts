import { Component , ViewEncapsulation} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,SwiperScrollbarInterface } from 'ngx-swiper-wrapper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  public slides = [1, 2, 3,4,5,6].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
}