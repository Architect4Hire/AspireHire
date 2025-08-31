import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-download-app',
    imports: [NgClass],
    templateUrl: './download-app.component.html',
    styleUrl: './download-app.component.scss'
})
export class DownloadAppComponent {

    constructor (
        public router: Router
    ) {}

}