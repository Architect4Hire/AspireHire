import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-employers-map-sidebar-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './employers-map-sidebar-page.component.html',
    styleUrl: './employers-map-sidebar-page.component.scss'
})
export class EmployersMapSidebarPageComponent {

    // Filter Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}