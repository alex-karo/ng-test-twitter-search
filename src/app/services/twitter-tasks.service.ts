import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { TweetInterface } from '../interfaces/tweet';

@Injectable()
export class TwitterTasksService {

  constructor(private http: Http) {
  }

  fetch(hashtag: string): Observable<TweetInterface[]> {
    const url = `${environment.tweetsApiHost}/tweets/${hashtag}`;
    return this.http.get(url)
      .map(res => res.json());
  }
}
