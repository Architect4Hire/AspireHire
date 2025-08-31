import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    imports: [CarouselModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

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
			"<img src='img/icons/left-arrow-orange.svg' alt='Arrow Icon'>",
			"<img src='img/icons/right-arrow-orange.svg' alt='Arrow Icon'>"
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