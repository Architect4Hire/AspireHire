import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-jobs-list-page',
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './jobs-list-page.component.html',
    styleUrl: './jobs-list-page.component.scss'
})
export class JobsListPageComponent {

    // Salary Range Slider
	minValue: number = 0;
    maxValue: number = 1000;
    onSliderChange(): void {
        if (this.minValue > this.maxValue) {
            const temp = this.minValue;
            this.minValue = this.maxValue;
            this.maxValue = temp;
        }
    }

    // Filter Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}