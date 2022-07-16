import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {Photo} from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos!: Photo[];
  albumId!: number;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void {
    // this.albumsService.getPhotos().subscribe((photos: ) => {
    //   this.photos = photos;
    // });
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.albumId = +x.get('id'));
    this.albumsService.getPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
