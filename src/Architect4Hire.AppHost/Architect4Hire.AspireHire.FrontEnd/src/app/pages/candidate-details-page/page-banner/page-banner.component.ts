import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-banner:not(13)',
    imports: [RouterLink],
    templateUrl: './page-banner.component.html',
    styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {}