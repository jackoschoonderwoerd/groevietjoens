import { Injectable } from '@angular/core';
import { GroevieImage } from '../../shared/models/groevieImage';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor() { }

    groevieImages: GroevieImage[] = [
        {
            name: 'bass-guitar',
            imgPath: 'assets/images/slides/bass-guitar.png'
        },
        {
            name: 'contrabass',
            imgPath: 'assets/images/slides/contrabass.jpg'
        },
        {
            name: 'keyboard',
            imgPath: 'assets/images/slides/keyboard.jpg'
        },
        {
            name: 'mengtafel',
            imgPath: 'assets/images/slides/mengtafel.jpg'
        },
        {
            name: 'portrait-front',
            imgPath: 'assets/images/slides/portrait-front.jpg'
        },
        {
            name: 'sliders',
            imgPath: 'assets/images/slides/sliders.jpg'
        }
    ]

    getGroevieImages() {
        return this.groevieImages;
    }
}
