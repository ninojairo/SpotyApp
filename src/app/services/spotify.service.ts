import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {
  private url: string = 'https://api.spotify.com/v1/browse/new-releases';
  private authorization : any ='Bearer BQCcQvkqHAjcJkiDLbvuC9pYzlg1sOov3j6UfoWF8dCTkoYV6pJXJ5GPRsZ3RQzfN2G474H5EqKDTtL8YOg';

  //constructor(private _httpClient : HttpClient) { }
  constructor(private _httpClient : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({'Authorization' :'Bearer BQBnx80vxiEuVmgGRHABGrCbTrpMM_kPo5rn9hc8qC6edgjxKsucJGjsUyqmlY7bNJfdQg164c2d0ew7YC0'});
    console.log("service avalilable");
    return this._httpClient.get(this.url,{headers}).pipe(map((data:any)=>{
      return data.albums.items}));
  }

  getAtist(termino:string){
    this.url=`https://api.spotify.com/v1/search?q=${termino}&type=artist`;
    const headers = new HttpHeaders({'Authorization' :'Bearer BQBnx80vxiEuVmgGRHABGrCbTrpMM_kPo5rn9hc8qC6edgjxKsucJGjsUyqmlY7bNJfdQg164c2d0ew7YC0'});
    return this._httpClient.get(this.url,{headers}).pipe(map((data:any)=>{
      return data.artists.items;
    }));
    
  }

}
