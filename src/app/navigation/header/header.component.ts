import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, RouterModule, MatListModule,],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


    @Output() sidenavToggle = new EventEmitter<void>

    activePage: string = '';


    constructor(
        private router: Router) { }

    ngOnInit(): void {

        this.router.events.subscribe((val: any) => {
            if (val && val.url) {
                const rawActivePage = val.url
                this.activePage = rawActivePage.substring(1)
            }


        })
    }

    onMenu() {
        this.sidenavToggle.emit()
    }
}
