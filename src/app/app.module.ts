import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { TwitterTasksService } from './services/twitter-tasks.service';
import { HttpModule } from '@angular/http';
import { TweetItemComponent } from './components/tweet-item/tweet-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TweetItemComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [TwitterTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
