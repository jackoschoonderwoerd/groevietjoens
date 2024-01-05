import { Injectable } from '@angular/core';
import { Klant } from '../../shared/models/klant..model';

@Injectable({
    providedIn: 'root'
})
export class KlantenService {

    constructor() { }

    klanten: Klant[] = [
        {
            name: 'milka',
            imgPath: 'assets/images/logos/milka.png'
        },
        {
            name: 'rtl5',
            imgPath: 'assets/images/logos/rtl5.png'
        },
        {
            name: 'rtl4',
            imgPath: 'assets/images/logos/rtl4.png'
        },
        {
            name: 'sbs6',
            imgPath: 'assets/images/logos/sbs6.jpeg'
        },
        {
            name: 'ncrv',
            imgPath: 'assets/images/logos/ncrv.png'
        },
        {
            name: 'tros',
            imgPath: 'assets/images/logos/tros.png'
        },
        {
            name: 'eo',
            imgPath: 'assets/images/logos/eo.png'
        },
        {
            name: 'kro',
            imgPath: 'assets/images/logos/kro.png'
        },
        {
            name: 'nickelodeon',
            imgPath: 'assets/images/logos/nickelodeon.png'
        },
        {
            name: 'rijksoverheid',
            imgPath: 'assets/images/logos/rijksoverheid.jpeg'
        },
        {
            name: 'ogilvy',
            imgPath: 'assets/images/logos/ogilvy.png'
        },
        {
            name: 'st. antonius ziekenhuis',
            imgPath: 'assets/images/logos/antonius.png'
        },
        {
            name: 'MAN vrachtwagens',
            imgPath: 'assets/images/logos/man.png'
        },
        {
            name: 'porsche',
            imgPath: 'assets/images/logos/porsche.png'
        },
        {
            name: 'Nederlandse vereniging van vrouwelijke hoogleraren',
            imgPath: ''
        },
        {
            name: 'Glorydays Media',
            imgPath: 'assets/images/logos/glorydays.jpeg'
        },
        {
            name: 'Wijbenga Media Consultancy',
            imgPath: 'assets/images/logos/wijbenga.png'
        },
        {
            name: 'stempels haarlem',
            imgPath: 'assets/images/logos/stempels.png'
        },
        {
            name: 'pesk',
            imgPath: 'assets/images/logos/pesk.png'
        },
        {
            name: 'rijkswaterstaat',
            imgPath: 'assets/images/logos/rijkswaterstaat.png'
        },
        {
            name: 'tadorna',
            imgPath: 'assets/images/logos/tadorna.jpeg'
        },

    ]
    getKlanten() {
        return this.klanten;
    }
}
