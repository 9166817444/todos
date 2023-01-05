import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoInputComponent } from './Ui-Components/todo-input/todo-input.component';
import { TodoItemComponent } from './Ui-Components/todo-item/todo-item.component';
import { TodoListComponent } from './Ui-Components/todo-list/todo-list.component';
import { todoReducer } from './Providers/todos.reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      "todos" : todoReducer,
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
