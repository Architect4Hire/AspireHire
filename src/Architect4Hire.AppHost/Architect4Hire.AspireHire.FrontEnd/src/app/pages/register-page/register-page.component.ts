import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-register-page',
    imports: [RouterLink, NgClass, TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

    // Password Show/Hide
    password1: string = '';
    password2: string = '';
    isPassword1Visible: boolean = false;
    isPassword2Visible: boolean = false;
    togglePassword1Visibility(): void {
        this.isPassword1Visible = !this.isPassword1Visible;
    }
    togglePassword2Visibility(): void {
        this.isPassword2Visible = !this.isPassword2Visible;
    }
    onPassword1Input(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password1 = inputElement.value;
    }
    onPassword2Input(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password2 = inputElement.value;
    }

}