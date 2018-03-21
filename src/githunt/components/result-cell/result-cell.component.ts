import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'result-cell',
  templateUrl: 'result-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCellComponent implements OnInit {
  @Input() result: Observable<any>;
  constructor() {}

  ngOnInit() {}
}
