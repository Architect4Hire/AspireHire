import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, NgClass],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

    constructor (
        public router: Router
    ) {}

}