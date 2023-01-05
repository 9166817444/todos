import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoSelector } from 'src/app/Providers/todos.reducers';
import { TodoModel_I } from 'src/app/Providers/todos.states';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:TodoModel_I[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTodos();
      
  }

  loadTodos(){
    this.store.select(todoSelector).subscribe((state) => this.todos = state);
  }
}
