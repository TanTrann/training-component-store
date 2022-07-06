import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { makeid } from 'src/app/helpers/makeId';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { DialogAddTodoComponent } from 'src/app/shared/dialog-add-todo/dialog-add-todo.component';
import { TaskStore } from './task.store';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskStore],
})
export class TaskComponent implements OnInit {
  showDialog: boolean | undefined;
  taskList!: any;

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe((res) => {
      this.taskList = res;
      console.log(this.taskList);
    });
  }

  constructor(private taskService: TasksService, public dialog: MatDialog) {}

  getIcon = [
    {
      icons: ['accountCircleIcon', 'editModeIcon'],
    },
  ];

  ShowDialog() {
    this.dialog.open(DialogAddTodoComponent);
  }
}
