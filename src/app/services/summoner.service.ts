import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private http: HttpClient) { }

  getSummoner(){
    return this.http.get('https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/eikichis?api_key=RGAPI-4c0d4ce8-119f-4909-9fcd-f12474491df9');
  }

  getLeague(){
    return this.http.get('https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/p1rJYvyJpWCINqIvxSk0CulcYcyk977HXOToQBaWs9c?api_key=RGAPI-4c0d4ce8-119f-4909-9fcd-f12474491df9');
  }

  getChampions(){
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
  }
}
