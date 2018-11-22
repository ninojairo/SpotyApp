import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistasEncontrados : any[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }
  getArtist(termino: string){
    console.log(termino);
    this.spotifyService.getAtist(termino).subscribe((data:any)=>{
      console.log(data);
      //this.artistasEncontrados = data.artists.items;
      this.artistasEncontrados = data;
    })


  }

}
