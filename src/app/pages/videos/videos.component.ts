import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VideosService } from './videos.service';
import { Video } from '../../shared/models/video.model';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../shared/pipes/dom-sanitizer.pipe';

@Component({
    selector: 'app-videos',
    standalone: true,
    imports: [
        MatExpansionModule,
        CommonModule,
        SafePipe,
        MatProgressSpinnerModule
    ],
    providers: [SafePipe],
    templateUrl: './videos.component.html',
    styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

    videos: Video[] = [];
    selectedVideo!: Video

    constructor(private videosService: VideosService) { }

    ngOnInit(): void {
        this.videos = this.videosService.getVideos();
    }
    onVideoSelected(index: number) {
        console.log(index)
        this.selectedVideo = this.videosService.getVideoByIndex(index);
    }
}
