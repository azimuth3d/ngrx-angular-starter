import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResultItem } from '../../models';

@Component({
  selector: 'result-cell',
  templateUrl: 'result-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // Checking for Re render when Input change only
})
export class ResultCellComponent implements OnInit {
  @Input() result: ResultItem;
  constructor() {}

  ngOnInit() {}
}
