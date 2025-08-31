import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { HowAbezoWorksComponent } from '../../common/how-abezo-works/how-abezo-works.component';
import { WhyJoinUsComponent } from '../../common/why-join-us/why-join-us.component';
import { SuccessStoriesComponent } from '../../common/success-stories/success-stories.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-about-page',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent, HowAbezoWorksComponent, WhyJoinUsComponent, SuccessStoriesComponent, PartnersComponent, BlogComponent, DownloadAppComponent, CtaComponent, FooterComponent, BackToTopComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {}