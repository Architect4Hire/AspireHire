import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-faq-page',
    imports: [NgClass, NgIf, TopHeaderComponent, NavbarComponent, PageBannerComponent, AskQuestionsComponent, FooterComponent, BackToTopComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

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

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}