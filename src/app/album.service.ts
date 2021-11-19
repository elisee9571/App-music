import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[] = ALBUMS;
  albumListe: List[] = ALBUM_LISTS;
  subjectAlbum = new Subject<Album>();


  constructor() { }
  
  // retourne tous les albums dans l'ordre DSC.
  paginate(start: number, end: number):Album[] {
    return this.albums.sort((a, b) => b.duration - a.duration).slice(start, end);
  }
  
  //retourne un album.
  getAlbum(id: string){ 
    return this.albums.find(elem => elem.id === id);
  } 

  // retourne la liste d’un album
  getListAlbum(id: string){
    return this.albumListe.find(list => list.id === id);
  }

  count(){
    return this.albums.length;
  } 

  // Méthodes search
  search(word: string): Album[] {
    let re = new RegExp(word.trim(), 'g');
    return this.albums.filter(album => album.title.match(re) && album.title.match(re).length > 0);
  }

  // Méthodes audio player
  switchOn(album: Album) {

    this.albums.forEach(
      a => {
        if (a.ref === album.ref) { album.status = 'on'; }
        else {
          a.status = 'off';
        }
      }
    );
  
    this.subjectAlbum.next(album); // Observer puscher les informations
  }
  
  switchOff(album: Album) {
    this.albums.forEach(
      a => {
        a.status = 'off';
      }
    );
  }

  

}
