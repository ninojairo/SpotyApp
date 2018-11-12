import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases : any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._spotifyService.getNewReleases().subscribe((data:any)=>{
      console.log(data.albums.items);
      this.newReleases = data.albums.items;
      console.log(data.albums.items[0].images[0].url);
      

    })
  }

}
