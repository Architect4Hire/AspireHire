import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-job-details-three-page',
    imports: [RouterLink, NgIf, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './job-details-three-page.component.html',
    styleUrl: './job-details-three-page.component.scss'
})
export class JobDetailsThreePageComponent {

    // Action Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.db-action-btn')) {
            this.isCardHeaderOpen = false;
        }
    }

}