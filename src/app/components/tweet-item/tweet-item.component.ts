import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TweetInterface } from '../../interfaces/tweet';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {
  @Input() tweetData: TweetInterface;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.tweetData.id);
  }

}
