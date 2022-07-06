import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.scss'],
})
export class TaskBoxComponent implements OnInit {
  @Input() title?: string;
  @Input() description?: string;
  @Input() date?: string;
  @Input() type?: string;
  @Input() icons?: string[];
  showBoxId: any;
  showBox: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onViewMenu(icon: any) {
    if (icon = false) {
      console.log(this.showBox)
      // alert(this.showBoxId);
      this.showBox = true;
      this.showBoxId = icon;
    } else {
      this.showBox = !this.showBox;
    }
  }
}
