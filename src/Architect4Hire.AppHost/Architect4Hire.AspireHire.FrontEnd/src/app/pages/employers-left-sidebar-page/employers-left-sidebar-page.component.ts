import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-employers-left-sidebar-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './employers-left-sidebar-page.component.html',
    styleUrl: './employers-left-sidebar-page.component.scss'
})
export class EmployersLeftSidebarPageComponent {}