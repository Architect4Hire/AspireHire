import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { AboutComponent } from '../../common/about/about.component';
import { FeaturedJobsComponent } from '../../common/featured-jobs/featured-jobs.component';
import { HowAbezoWorksComponent } from '../../common/how-abezo-works/how-abezo-works.component';
import { WhyJoinUsComponent } from '../../common/why-join-us/why-join-us.component';
import { SuccessStoriesComponent } from '../../common/success-stories/success-stories.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-one',
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, CategoriesComponent, AboutComponent, FeaturedJobsComponent, HowAbezoWorksComponent, WhyJoinUsComponent, SuccessStoriesComponent, PartnersComponent, BlogComponent, DownloadAppComponent, CtaComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}