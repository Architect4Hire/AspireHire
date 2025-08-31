import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-login-page',
    imports: [RouterLink, NgClass, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

    // Password Show/Hide
    password: string = '';
    isPasswordVisible: boolean = false;
    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    onPasswordInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password = inputElement.value;
    }

}