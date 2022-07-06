import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent implements OnInit {
  @Input() date?: string;
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {}
}
