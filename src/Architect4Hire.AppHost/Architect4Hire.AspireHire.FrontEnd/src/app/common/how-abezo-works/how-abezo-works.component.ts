import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-how-abezo-works',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './how-abezo-works.component.html',
    styleUrl: './how-abezo-works.component.scss'
})
export class HowAbezoWorksComponent {

    constructor (
        public router: Router
    ) {}

}