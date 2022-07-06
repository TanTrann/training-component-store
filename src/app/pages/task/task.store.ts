import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { makeid } from 'src/app/helpers/makeId';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { DialogAddTodoComponent } from 'src/app/shared/dialog-add-todo/dialog-add-todo.component';
export interface TaskState {}
const state = {
  // taskForm: null as FormGroup | null,
  // taskList: [],
  // getIcon: [
  //   {
  //     icons: ['accountCircleIcon', 'editModeIcon'],
  //   },
  // ],
};

type State = typeof state;
@Injectable()
export class TaskStore extends ComponentStore<State> {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private taskService: TasksService,
    private fb: FormBuilder
  ) {
    super(state);
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    }
    // this.patchState({
    //   taskForm: this.fb.group({
    //     title: ['', Validators.required],
    //     description: ['', Validators.required],
    //     date: ['', Validators.required],
    //     hour: ['', [Validators.required]],
    //     responsable: ['', [Validators.required]],
    //     status: ['', [Validators.required]],
    //   }),
    // });
    
  }
 
  // get id(): string {
  //   return makeid(4) + '-' + Math.floor(Math.random() * 10);
  // }
  // get title() {
  //   return this.get((x) => x.taskForm)?.value.title;
  // }
  // get description() {
  //   return this.get((x) => x.taskForm)?.value.description;
  // }
  // get date(): string {
  //   return this.get((x) => x.taskForm)?.value.date;
  // }
  // get hour() {
  //   return this.get((x) => x.taskForm)?.value.hour;
  // }
  // get responsable() {
  //   return this.get((x) => x.taskForm)?.value.responsable;
  // }

  // get status() {
  //   return this.get((x) => x.taskForm)?.value.status;
  // }
  // get createdAt() {
  //   return new Date();
  // }
  // get createdBy() {
  //   return 'admin';
  // }
  // get updatedAt() {
  //   return new Date();
  // }
  // get lastChangedBy() {
  //   return 'admin';
  // }
  startAdd = () => {
    // const id = makeid(4) + '-' + Math.floor(Math.random() * 10);
    // const title = this.taskForm.value.title;
    // const description = this.taskForm.value.description;
    // const date = this.taskForm.value.date;
    // const hour = this.taskForm.value.hour;
    // const responsable = this.taskForm.value.responsable;
    // const status = this.taskForm.value.status;
    // const createdAt = new Date();
    // const createdBy = 'admin';
    // const updatedAt = new Date();
    // const lastChangedBy = 'admin';
    // console.log(this.taskForm);

    // this.taskService
    //   .saveTask(
    //     this.id,
    //     this.title,
    //     this.description,
    //     this.date,
    //     this.hour,
    //     this.responsable,
    //     this.status,
    //     this.createdAt,
    //     this.createdBy,
    //     this.updatedAt,
    //     this.lastChangedBy
    //   )
    //   .subscribe((res) => console.log(res));
    // // this.showDialog = false;
  };
}
