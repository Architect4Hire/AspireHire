import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-candidates-map-sidebar-page',
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './candidates-map-sidebar-page.component.html',
    styleUrl: './candidates-map-sidebar-page.component.scss'
})
export class CandidatesMapSidebarPageComponent {

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