import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.scss'],
})
export class TaskControlComponent implements OnInit {
  @Input() title?: string;
  @Input() quantites?: number;
  @Input() icon?: string;
  @Input() tag!: string | null;

  @Input() color: string = '#222222';
  @Input() styles: any = {};
 
  constructor() {}

  ngOnInit(): void {}

  customStyles() {
    return this.styles;
  }
}
