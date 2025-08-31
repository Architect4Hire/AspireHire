import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-pricing-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent, CtaComponent, FooterComponent, BackToTopComponent],
    templateUrl: './pricing-page.component.html',
    styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent {

    // Pricing Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}