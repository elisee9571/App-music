import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms'; // module de gestion de formulaire
import { AlbumService } from '../album.service';
import { Album } from '../album';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();


  constructor(private albumService: AlbumService) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // console.log(form); // récupération la data de la valeur
    const results = this.albumService.search(form.value.word);
    if(results.length > 0){
      console.log('result', results); // récupération d'une valeur spécifique
      this.searchAlbums.emit(results);
    }
  }
}
