import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-blog-grid-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './blog-grid-page.component.html',
    styleUrl: './blog-grid-page.component.scss'
})
export class BlogGridPageComponent {}