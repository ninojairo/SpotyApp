import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';


@Injectable()
export class SpotifyService {
  private url: string = 'https://api.spotify.com/v1/browse/new-releases';
  private authorization : any ='Bearer BQCcQvkqHAjcJkiDLbvuC9pYzlg1sOov3j6UfoWF8dCTkoYV6pJXJ5GPRsZ3RQzfN2G474H5EqKDTtL8YOg';

  //constructor(private _httpClient : HttpClient) { }
  constructor(private _httpClient : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({'Authorization' :'Bearer BQBhq4YW2mU7XrTEVVlaMb2cVPce7Tpx37JiQmwhrwkDgbIB_PPJa0lC8w4ir-Lw3pvhUP_OaXf_HlwoYjk'});
    console.log("service avalilable");
    return this._httpClient.get(this.url,{headers});
  }

}
