import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GroevieImage } from '../../shared/models/groevieImage';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    groevieImages: GroevieImage[] = []

    // selectedIndex: any = 1;

    // iterations = 10;
    // selectedIndex: number = 0;

    selectedIndex: number = 0;
    interval: any;
    iterations: number = 10;
    currentIteration: number = 0;
    @ViewChild('page', { static: false }) page!: ElementRef
    @ViewChild('images', { static: false }) images!: ElementRef

    constructor(
        private homeService: HomeService
    ) { }

    ngOnInit(): void {
        this.groevieImages = this.homeService.getGroevieImages();
        console.log(this.selectedIndex);
        this.interval = setInterval(() => {
            this.selectedIndex++;
            // console.log(this.selectedIndex);

            this.checkIterations();
        }, 3000);
    }

    getImageInfo() {
        const imgPath = this.groevieImages[this.selectedIndex].imgPath
        const targetImage = new Image();
        targetImage.src = imgPath;
        // console.log(targetImage.height);
        // console.log(this.page.nativeElement.offsetHeight)
        // console.log(this.images.nativeElement.offsetHeight)

    }

    checkIterations() {
        this.currentIteration++;
        if (this.selectedIndex === this.groevieImages.length) {
            this.selectedIndex = 0
        }
        this.getImageInfo()
    }

    stopInterval() {
        clearInterval(this.interval);
        console.log('Interval stopped');
    }


    getIndex(index: number) {

        this.selectedIndex = index;
    }
}
