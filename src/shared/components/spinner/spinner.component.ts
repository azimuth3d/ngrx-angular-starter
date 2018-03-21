import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
