import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  // @Input() attrr: any;
  @Input() src!: string;
  @Input() type!: string;
  @Input() placeholder!: string;

  @Input() iconPrefix!: string;
  @Input() iconSuffix!: string;

  @Input() errorMessage!: string;
  @Input() inputSumited?: boolean;
  @Input() getErrorMessage!: string;
  
  @Input() control: FormControl = new FormControl();
  constructor() {}
  ngOnInit(): void {}
}
