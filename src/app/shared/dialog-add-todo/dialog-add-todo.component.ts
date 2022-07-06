import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { makeid } from 'src/app/helpers/makeId';
import { IoptionList } from 'src/app/interfaces/IoptionList';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-dialog-add-todo',
  templateUrl: './dialog-add-todo.component.html',
  styleUrls: ['./dialog-add-todo.component.scss'],
})
export class DialogAddTodoComponent implements OnInit {
  taskForm!: FormGroup;
  taskList!: any;
  optionStatusList: IoptionList[] = [
    {
      id: 'todo',
      label: 'Todo',
    },
    {
      id: 'done',
      label: 'Done',
    },
    {
      id: 'inprogress',
      label: 'In Progress',
    },
  ];
  optionResponList: IoptionList[] = [
    {
      id: 'option1',
      label: 'option 1',
    },
    {
      id: 'option2',
      label: 'option 2',
    },
  ];

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      hour: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
    console.log(this.responsable.value);
  }
  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    public dialog: MatDialog
  ) {}

  get id() {
    return this.taskForm.get('id') as FormControl;
  }
  get title() {
    return this.taskForm.get('title') as FormControl;
  }
  get description() {
    return this.taskForm.get('description') as FormControl;
  }
  get date() {
    return this.taskForm.get('date') as FormControl;
  }
  get hour() {
    return this.taskForm.get('hour') as FormControl;
  }
  get responsable() {
    return this.taskForm.get('responsable') as FormControl;
  }
  get status() {
    return this.taskForm.get('status') as FormControl;
  }
  get createdAt() {
    return this.taskForm.get('createdAt') as FormControl;
  }
  get createdBy() {
    return this.taskForm.get('createdBy') as FormControl;
  }
  get updatedAt() {
    return this.taskForm.get('updatedAt') as FormControl;
  }
  get lastChangedBy() {
    return this.taskForm.get('lastChangedBy') as FormControl;
  }

  displayValue(value: any) {
    console.log(value);
  }

  // check(){
  //   // this.taskForm.get('status')?.setValue('22');
  //   console.log(this.responsable.value);
  // }
  onAdd() {
    const id = makeid(4) + '-' + Math.floor(Math.random() * 10);
    const title = this.taskForm.value.title;
    const description = this.taskForm.value.description;
    const date = this.taskForm.value.date;
    const hour = this.taskForm.value.hour;
    const responsable = this.taskForm.value.responsable;
    const status = this.status.value;
    const createdAt = new Date();
    const createdBy = 'admin';
    const updatedAt = new Date();
    const lastChangedBy = 'admin';
    if (this.taskForm.valid) {
      this.taskService
        .saveTask(
          id,
          title,
          description,
          date,
          hour,
          responsable,
          status,
          createdAt,
          createdBy,
          updatedAt,
          lastChangedBy
        )
        .subscribe((res) => console.log(res));
      this.dialog.closeAll();
    } else {
    }
  }
}
