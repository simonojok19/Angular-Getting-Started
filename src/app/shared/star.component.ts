import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() {}
  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
    console.log(this.starWidth);
  }
  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}
