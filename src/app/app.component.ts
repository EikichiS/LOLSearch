import { Component } from '@angular/core';
import { SummonerService } from './services/summoner.service';

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

  constructor(protected summonerservice: SummonerService) {
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
        (respuesta) => {
          console.log(respuesta[0]);
          this.leagues = respuesta[0];
          
        },
        (error) => {
          console.error(error);
        }),
        this.summonerservice.getChampions().subscribe(
          (response) => {
            console.log(response);
            this.champions = response;
          },
          (error) => {
            console.error(error);
          })
        
  }


}
