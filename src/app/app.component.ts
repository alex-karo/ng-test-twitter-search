import { Component } from '@angular/core';
import { TwitterTasksService } from './services/twitter-tasks.service';
import { TweetInterface } from './interfaces/tweet';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tweetList: TweetInterface[] = [];

  constructor(private twitterService: TwitterTasksService) {}

  public getTweets(form: NgForm) {
    if (!form.value.hashtag) {
      return;
    }
    this.twitterService.fetch(form.value.hashtag)
      .subscribe(
        data => {
          this.tweetList = [
            ...data,
            ...this.tweetList
          ];
          form.reset();
        },
        err => console.log(err)
      );
  }

  public deleteTweet(id: number) {
    this.tweetList = this.tweetList
      .filter(tweet => tweet.id !== id);
  }
}
