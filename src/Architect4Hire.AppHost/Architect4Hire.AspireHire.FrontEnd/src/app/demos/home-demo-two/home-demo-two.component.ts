import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { AboutComponent } from '../../common/about/about.component';
import { FeaturedJobsComponent } from '../../common/featured-jobs/featured-jobs.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { HowAbezoWorksComponent } from '../../common/how-abezo-works/how-abezo-works.component';
import { SuccessStoriesComponent } from '../../common/success-stories/success-stories.component';
import { WhyJoinUsComponent } from '../../common/why-join-us/why-join-us.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { BrowseCandidatesComponent } from '../../common/browse-candidates/browse-candidates.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-two',
    imports: [NavbarComponent, BannerComponent, CategoriesComponent, AboutComponent, FeaturedJobsComponent, PartnersComponent, HowAbezoWorksComponent, SuccessStoriesComponent, WhyJoinUsComponent, PricingComponent, BrowseCandidatesComponent, BlogComponent, FaqComponent, CtaComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}