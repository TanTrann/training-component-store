import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogAddTodoComponent } from 'src/app/shared/dialog-add-todo/dialog-add-todo.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(public dialog: MatDialog,private authService:AuthService) {}

  ngOnInit(): void {}
  openDialog(): void {
    this.dialog.open(DialogAddTodoComponent);
  }
  logout(): void {
    this.authService.logout();
  }
}

