import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export interface Link {
    name: string,
    link: string
}


@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatListModule, MatIconModule, RouterModule, CommonModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

    links: Link[] = [
        {
            name: 'home',
            link: 'home',
        },
        {
            name: 'over groevie tjoens',
            link: 'about',
        },
        {
            name: 'bassist erik schoonderwoerd',
            link: 'bassist',
        },
        {
            name: 'muziek',
            link: 'muziek',
        },
        {
            name: 'video\'s',
            link: 'videos',
        },
        {
            name: 'klanten',
            link: 'klanten',
        },
        {
            name: 'contact',
            link: 'contact',
        },
    ]

    @Output() closeSidenav = new EventEmitter<void>

    onCloseSidenav() {
        this.closeSidenav.emit()
    }
}
