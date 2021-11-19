import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss']
})
export class AlbumDescriptionComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute, // récupérez le service route
    private albumService: AlbumService // récupérez le service
    ) { }

  ngOnInit(): void {
    // permet de récupérer l'identifiant
    const id = this.route.snapshot.paramMap.get('id');
    // TODO récupérez le détail d'un album
      
    this.album = this.albumService.getAlbum(id);
    console.log(this.album);

    
  }

}
