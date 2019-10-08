import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  api = 'RGAPI-83c61c42-921a-4fcf-b0bf-52b09eaafa50';

  constructor(private http: HttpClient) { }


  getSummoner() {
    return this.http.get('http://localhost/lol/summoner/v4/summoners/by-name/eikichis?platform=LA2') 
  }
  getLeague() {
    return this.http.get('http://localhost/lol/league/v4/entries/by-summoner/MdIvR5iCYxcgrQuim8YSNsLC2V59goVV5nBB7ZhG1lM?platform=LA2')
  }
  getMastery() {
    return this.http.get('http://localhost/lol/champion-mastery/v4/champion-masteries/by-summoner/MdIvR5iCYxcgrQuim8YSNsLC2V59goVV5nBB7ZhG1lM?platform=LA2')
  }
  getMatchHistory() {
    return this.http.get('http://localhost/lol/match/v4/matchlists/by-account/3crdujWAcvzS-kUGwOhgzieRwRteogq9OyijJQSwiA?platform=LA2')
  }
  getMatchInfo(matchid : String) {
    return this.http.get('http://localhost/lol/match/v4/matches/'+matchid+'?platform=LA2')
  }
 }
