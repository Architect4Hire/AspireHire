import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    imports: [NgClass, NgIf, CarouselModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    constructor (
        public router: Router
    ) {}

	// Owl Carousel
    brandSlides: OwlOptions = {
		nav: false,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
		autoplayHoverPause: true,
        slideTransition: 'linear',
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		],
        responsive: {
			0: {
				items: 3
			},
			515: {
				items: 4
			},
			695: {
				items: 5
			},
			935: {
				items: 6
			}
		}
    }

}