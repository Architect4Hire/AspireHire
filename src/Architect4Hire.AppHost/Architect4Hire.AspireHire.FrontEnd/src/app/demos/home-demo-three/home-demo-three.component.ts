import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { AboutComponent } from '../../common/about/about.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { FeaturedJobsComponent } from '../../common/featured-jobs/featured-jobs.component';
import { HowAbezoWorksComponent } from '../../common/how-abezo-works/how-abezo-works.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { CandidatesComponent } from '../../common/candidates/candidates.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { ApplyComponent } from '../../common/apply/apply.component';
import { TrustedClientsComponent } from '../../common/trusted-clients/trusted-clients.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-three',
    imports: [NavbarComponent, BannerComponent, PartnersComponent, AboutComponent, CategoriesComponent, FeaturedJobsComponent, HowAbezoWorksComponent, FunfactsComponent, CandidatesComponent, TestimonialsComponent, BlogComponent, DownloadAppComponent, ApplyComponent, TrustedClientsComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}