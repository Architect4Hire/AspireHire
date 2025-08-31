import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-featured-jobs',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './featured-jobs.component.html',
    styleUrl: './featured-jobs.component.scss'
})
export class FeaturedJobsComponent {

    constructor (
        public router: Router
    ) {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}