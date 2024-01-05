import { Component, OnInit } from '@angular/core';
import { Klant } from '../../shared/models/klant..model';
import { KlantenService } from './klanten.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-klanten',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './klanten.component.html',
    styleUrl: './klanten.component.scss'
})
export class KlantenComponent implements OnInit {



    klanten: Klant[] = [];

    constructor(private klantenService: KlantenService) { }

    ngOnInit(): void {
        this.klanten = this.klantenService.getKlanten()
    }
}
