import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/albums.service';
import { Album } from 'src/app/models/album-model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any;
  loaded: any;
  newAlbum: string;

  constructor(private albumsService: AlbumsService) { 
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe( (albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    this.loaded = false;
    const album = {title: this.newAlbum}
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((i: { id: number; }) => i.id !== id)
    this.albumsService.deleteAlbum(id).subscribe();
  }

}
