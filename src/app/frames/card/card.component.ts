import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

interface IAnime {
  id: number;
  name: string;
  russian: string;
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  image: {
    original: string;
    preview: string;
  };

}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() anime!: IAnime

  constructor() {
  }

  ngOnInit() {
    console.log(this.anime)
    console.log(this.anime.episodes)
  }
}
