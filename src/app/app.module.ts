import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginComponent } from './pages/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskComponent } from './pages/task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddTodoComponent } from './shared/dialog-add-todo/dialog-add-todo.component';
import { MatSelectModule } from '@angular/material/select';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatCardModule } from '@angular/material/card';
import { TaskBoxComponent } from './shared/task-box/task-box.component';
import { TaskControlComponent } from './shared/task-control/task-control.component';
import { ButtonComponent } from './shared/button/button.component';
import { DefaultLayoutComponent } from './layout/layouts/default-layout/default-layout.component';
import { HeaderComponent } from './layout/layouts/common/header/header.component';
import { SidebarComponent } from './layout/layouts/common/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventBoxComponent } from './shared/event-box/event-box.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import { SelectDialogComponent } from './shared/select-dialog/select-dialog.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    InputComponent,
    DashboardComponent,
    TaskComponent,
    DialogAddTodoComponent,
    TaskComponent,
    TaskBoxComponent,
    TaskControlComponent,
    ButtonComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    EventBoxComponent,

    SelectDialogComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    ReactiveComponentModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddTodoComponent],
})
export class AppModule {}
