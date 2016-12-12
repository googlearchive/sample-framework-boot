import {NgModule, Component, Input} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

//basic app component
@Component({
  selector: 'post-comments',
  template: `
    <h1>Comments</h1>
    <post-comment *ngFor="let comment of comments" [comment]="comment"></post-comment>`
})
export class PostComments {
  comments = window['__comments']
}

@Component({
  selector: 'post-comment',
  template: `
    <h2 class="post__comment-author">{{comment.username}}</h2>
    <p class="post__comment-text">{{comment.text}}</p>
    <vote-buttons class="post__vote-buttons">
      <button class="post__vote-down">-</button>
      <span class="post__vote-score">{{comment.score}}</span>
      <button class="post__vote-up">+</button>
    </vote-buttons>
  `,
})
export class PostComment {
  @Input() comment: any;
}

@Component({
  selector: 'vote-buttons',
  template: `<ng-content></ng-content>`
})
export class VoteButtons {}

//root app module
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ PostComment, PostComments, VoteButtons ],
  bootstrap: [ PostComments ]
})
export class AppModule {}
