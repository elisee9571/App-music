import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  titlePage: string = "Page princiaple Albums Music";
  albums: Album[];
  selectedAlbum: Album;
  status: string; // pour gérer l'affichage des caractères [play] 

  constructor(private albumService: AlbumService) { }


  ngOnInit(): void {
    this.albums = this.albumService.paginate(0, 10); // apl de la methode paginate
  
  }


  onSelect(album: Album){
    // console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event){ // $event = album: Album
    this.status = $event.id // comparaison id
    this.albumService.switchOn($event);

  }

  search($event){
    if($event){
      this.albums = $event;
    }
    
  }

  // mise à jour de la pagination
  paginate($event) {
    this.albums = this.albumService.paginate($event.start, $event.end);
  }

}

