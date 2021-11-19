import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  songs: Array<string>;
  albumList: List[] = ALBUM_LISTS;
  @Input() album: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    // console.log(this.album); // contrôler que les données rentrent bien ici
    }

  ngOnChanges(){
    if(this.album){
      this.songs = this.albumService.getListAlbum(this.album.id).list;
    }
  }

  play(album: Album){
    // console.log('play!');
    this.onPlay.emit(album); // émettre un album vers le parent
  }
  
  
  

}
