import { Component } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0
        })
      ),
      transition('void <=> *', animate(1000))
    ])
  ]
})
export class AppComponent {
  movies = [];
  x = 1;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  addMovies(newMovies: string) {
    if (newMovies) {
      this.x = this.x + 1;
      this.movies.push(newMovies);
    }
  }

  removeItem() {
    this.movies.length -= 1;
  }
}
