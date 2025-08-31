import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-candidates-right-sidebar-page',
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './candidates-right-sidebar-page.component.html',
    styleUrl: './candidates-right-sidebar-page.component.scss'
})
export class CandidatesRightSidebarPageComponent {

    // Salary Range Slider
	minValue: number = 0; // Initial minimum value
    maxValue: number = 1000; // Initial maximum value
    onSliderChange(): void {
        if (this.minValue > this.maxValue) {
            // Ensure minValue is never greater than maxValue
            const temp = this.minValue;
            this.minValue = this.maxValue;
            this.maxValue = temp;
        }
        // Additional logic can be added here
    }

}