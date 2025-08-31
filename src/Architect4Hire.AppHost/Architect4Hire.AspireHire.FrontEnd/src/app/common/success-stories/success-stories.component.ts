import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-success-stories',
    imports: [CarouselModule, NgIf, NgClass],
    templateUrl: './success-stories.component.html',
    styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {

	constructor (
        public router: Router
    ) {}

	// Owl Carousel
    testimonialSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<img src='img/icons/left-arrow.svg' alt='Arrow Icon'>",
			"<img src='img/icons/right-arrow.svg' alt='Arrow Icon'>"
		],
        responsive: {
			0: {
				items: 1,
				autoHeight: true
			},
			515: {
				items: 1,
				autoHeight: false
			},
			695: {
				items: 2
			}
		}
    }

}