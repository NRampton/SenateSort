import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SenatorService {



  constructor(
    private _httpClient: HttpClient
  ) { }

  getSenators() {
    return this._httpClient
      .get(`https://api.propublica.org/congress/v1/115/senate/members.json`, 
        { headers: new HttpHeaders().set('X-API-Key', 'n6bCc6gjWmFMmBkPNfFHCS1bI1mru99N3dF8sN0p')}
      );
  }
}
