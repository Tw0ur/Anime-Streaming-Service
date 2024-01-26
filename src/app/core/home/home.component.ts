import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimeService} from "../../service/anime/anime.service";
import {CardComponent} from "../../frames/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  animes: any[] = [];

  constructor(private animeService: AnimeService) {
  }

  ngOnInit() {
    this.animeService.getAnime().subscribe(
      data => {
        console.log(data)
        this.animes = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  loadMore() {
    this.animeService.loadMoreAnime()
  }
}
