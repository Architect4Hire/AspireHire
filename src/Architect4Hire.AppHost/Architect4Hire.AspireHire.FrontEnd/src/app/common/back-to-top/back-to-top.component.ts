import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-back-to-top',
    imports: [NgIf],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {

    isShow: boolean = false;
    topPosToStartShowing = 100;

    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isShow = scrollPosition >= this.topPosToStartShowing;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}