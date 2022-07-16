import { Component, OnInit } from '@angular/core';
import { Photos } from '../../models/photos-model';
import { Album } from '../../models/album-model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  
  album!: Album;
  photos!: Photos[];
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
  	this.getAlbum();
  	this.getPhotos();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}