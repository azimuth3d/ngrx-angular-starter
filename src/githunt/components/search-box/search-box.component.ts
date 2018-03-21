import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
@Component({
  selector: 'search-box',
  template: `<input type="text" (keyup)="inputSearch($event.target.value)"
                name="search" placeholder="search"/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`input { padding: 10px; font-size: 1.4rem }`]
})
export class SearchboxComponent implements OnInit {
  @Output() changeSearchTerm: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}
  inputSearch(term: string) {
    this.changeSearchTerm.emit(term);
  }
}
