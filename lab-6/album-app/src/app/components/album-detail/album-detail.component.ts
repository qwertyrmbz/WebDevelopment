import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/albums.service';
import { Album } from 'src/app/models/album-model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  loaded: any;
  id: any;
  constructor(private route: ActivatedRoute, private location: Location, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum()
  }

  getAlbum() {
    this.route.paramMap.subscribe((params)=> {
      this.id = params.get('id');
      this.loaded = false;
      this.albumsService.getAlbum(+this.id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe();
    this.loaded = true;
  }

  goBack() {
    this.location.back();
  }

}
