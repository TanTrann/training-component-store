import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginComponent } from './pages/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { InputComponent } from './shared/input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
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
import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    InputComponent,
    DashboardComponent,
    TaskComponent,
    DialogAddTodoComponent,
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
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
