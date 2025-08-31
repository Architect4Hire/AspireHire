import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-jobs-top-map-page',
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './jobs-top-map-page.component.html',
    styleUrl: './jobs-top-map-page.component.scss'
})
export class JobsTopMapPageComponent {

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

}