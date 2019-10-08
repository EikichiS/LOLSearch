import { Component } from '@angular/core';
import { SummonerService } from './services/summoner.service';
import { ChampionsService } from './services/champions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOLSearch';
  summoners: any = [];
  leagues: any;
  champions: any = [];
  maestrias: any = [];
  matchs: any = [];
  matchsinfo: any = [];
  gameid : '';

  constructor(protected summonerservice: SummonerService,
              private championservice: ChampionsService) {
  }

  ngOnInit() {
    this.summonerservice.getSummoner().subscribe(
      (data) => {
        this.summoners = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }),
      this.summonerservice.getLeague().subscribe(
        (dataleague) => {
          console.log(dataleague[0]);
          this.leagues = dataleague[0];
          
        },
        (error) => {
          console.error(error);
        }),
        this.championservice.getJSON().subscribe(
          (datachampion) => {
            console.log(datachampion);
            this.champions = datachampion;
          },
          (error) => {
            console.error(error);
          }),
          this.summonerservice.getMastery().subscribe(
            (datamastery) => {
              console.log(datamastery[0],datamastery[1],datamastery[2],datamastery[3],datamastery[4]);                                                  
              this.maestrias = datamastery[0],datamastery[1],datamastery[2],datamastery[3],datamastery[4];
            },
            (error) => {
              console.error(error);
            }),
            this.summonerservice.getMatchHistory().subscribe(
              (datamatch) => {
                console.log(datamatch['matches']);
                console.log(datamatch['matches'][0].gameId);
                this.matchs = datamatch['matches'];
                this.gameid = datamatch['matches'].gameId;
                for (var i = 0; i < 10; i++){
                this.summonerservice.getMatchInfo(datamatch['matches'][i].gameId).subscribe(
                  (datamatchinfo) => {
                    console.log(datamatchinfo);
                    this.matchsinfo = datamatchinfo;
                  },
                  (error) => {
                    console.error(error);
                  })
                }
              },
              (error) => {
                console.error(error);
              }
            )

  }


}
