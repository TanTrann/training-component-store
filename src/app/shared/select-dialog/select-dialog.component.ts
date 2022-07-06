import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IoptionList } from 'src/app/interfaces/IoptionList';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss'],
})
export class SelectDialogComponent implements OnInit {
  constructor() {}
  @Input() printedOption!: string;
  @Input() selectedOption!: string;
  @Input() optionList: IoptionList[] = [];
  @Input() selectedDay: string = '';
  ngOnInit(): void {}

  @Input() control: FormControl = new FormControl();
  print() {
    this.printedOption = this.selectedOption;
    // console.log(this.selectedOption);
    this.control.setValue(this.selectedOption);
  
  }

  // @Output() valueChange = new EventEmitter();
  // valueChanged() {
  //   //update the ui
  //   // this.selectedDay = event.target.value;
  //   this.valueChange.emit(this.selectedOption);
  // }
}
