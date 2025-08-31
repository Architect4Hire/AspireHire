import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-cta',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.scss'
})
export class CtaComponent {

    constructor (
        public router: Router
    ) {}

}