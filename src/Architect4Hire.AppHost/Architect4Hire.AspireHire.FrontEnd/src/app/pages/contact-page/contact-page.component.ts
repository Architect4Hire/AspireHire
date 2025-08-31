import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-contact-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent, ContactInfoComponent, FooterComponent, BackToTopComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {}