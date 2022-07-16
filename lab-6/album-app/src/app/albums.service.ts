import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './models/album-model';
import { Photos } from './models/photos-model';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  baseURL = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.baseURL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.baseURL}/albums/${id}`);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.baseURL}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.baseURL}/albums/${album.id}`, album);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.baseURL}/albums`, album);
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.client.get<Photos[]>(`${this.baseURL}/albums/${id}/photos`);
  }
}
