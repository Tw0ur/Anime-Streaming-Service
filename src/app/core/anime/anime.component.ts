import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AnimeService} from "../../service/anime/anime.service";

interface Anime {
  id: number;
  name: string;
  // ...добавьте другие поля, которые вам нужны
}

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {
  anime!: Anime;

  constructor(private route: ActivatedRoute, private http: HttpClient, private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const animeId = params.get('id');
      if (animeId) {
        this.animeService.getAnimeById(animeId).subscribe(
          (data: Anime) => {
            console.log(data)
            this.anime = data;
          },
          error => {
            console.error('There was an error!', error);
          }
        );
      }
    });
  }
}
