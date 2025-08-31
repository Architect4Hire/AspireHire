import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from '../common/top-header/top-header.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { FooterComponent } from '../common/footer/footer.component';
import { BackToTopComponent } from '../common/back-to-top/back-to-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
    selector: 'app-employers-dashboard',
    imports: [RouterOutlet, TopHeaderComponent, NavbarComponent, SidebarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './employers-dashboard.component.html',
    styleUrl: './employers-dashboard.component.scss'
})
export class EmployersDashboardComponent {}