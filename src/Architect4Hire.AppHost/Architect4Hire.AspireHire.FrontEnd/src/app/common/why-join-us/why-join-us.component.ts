import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-why-join-us',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './why-join-us.component.html',
    styleUrl: './why-join-us.component.scss'
})
export class WhyJoinUsComponent {

    constructor (
        public router: Router
    ) {}

    // Accordion
    openSectionIndex: number = 0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}