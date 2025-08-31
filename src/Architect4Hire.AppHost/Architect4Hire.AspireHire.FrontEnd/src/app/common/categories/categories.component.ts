import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-categories',
    imports: [RouterLink, NgClass, NgIf, CarouselModule],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

    constructor (
        public router: Router
    ) {}

	// Owl Carousel
    categorySlides: OwlOptions = {
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
    categorySlides2: OwlOptions = {
        rtl: true,
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