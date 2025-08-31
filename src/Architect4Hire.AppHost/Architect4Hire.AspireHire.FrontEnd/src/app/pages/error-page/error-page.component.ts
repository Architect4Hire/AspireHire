import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-error-page',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, FooterComponent],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {}