import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/Providers/todos.actions';
import { todoSelector } from 'src/app/Providers/todos.reducers';
import { TodoModel_I } from 'src/app/Providers/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent  implements OnInit{

  todoInput?: string; 
  todos?: TodoModel_I[];

  constructor(private store:Store) {}

  ngOnInit(): void {
        this.store.select(todoSelector).subscribe(state => this.todos = state);
  }
  addTodo(){
    if( this.todoInput!.length > 0)
    this.store.dispatch(actions.addTodoAction(
      {
        id: this.todos!.length,
        completed: false,
        title: this.todoInput!,
      }
    ));
    this.todoInput = '';
  }

}
