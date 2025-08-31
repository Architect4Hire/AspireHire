import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass, RouterLinkActive, NgIf],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    constructor (
        public router: Router
    ) {}

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Menu Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Notifications Dropdown
    notificationsDropdownClassApplied = false;
    notificationsDropdownToggleClass() {
        this.notificationsDropdownClassApplied = !this.notificationsDropdownClassApplied;
    }

    // Responsive Navbar Accordion
    openSectionIndex: number = -1;
    openSectionIndex2: number = -1;
    openSectionIndex3: number = -1;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    toggleSection2(index: number): void {
        if (this.openSectionIndex2 === index) {
            this.openSectionIndex2 = -1;
        } else {
            this.openSectionIndex2 = index;
        }
    }
    toggleSection3(index: number): void {
        if (this.openSectionIndex3 === index) {
            this.openSectionIndex3 = -1;
        } else {
            this.openSectionIndex3 = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    isSectionOpen2(index: number): boolean {
        return this.openSectionIndex2 === index;
    }
    isSectionOpen3(index: number): boolean {
        return this.openSectionIndex3 === index;
    }

}