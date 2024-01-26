import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private limit = 12;
  private url = `https://shikimori.one/api/animes?page=1&limit=${this.limit}`;

  constructor(private http: HttpClient) {
  }

  getAnime(): Observable<any> {
    return this.http.get(this.url);
  }

  loadMoreAnime() {
    this.limit += 12;
  }

  getAnimeById(id: string | number): Observable<any> {
    return this.http.get(`https://shikimori.one/api/animes/${id}`)
  }
}
