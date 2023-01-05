import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/Providers/todos.actions';
import { TodoModel_I } from 'src/app/Providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo?: TodoModel_I;
  editTodo: boolean = false;
  todoInput?: string ;
  completeTodo: boolean = false;



  constructor(private store:Store) {}

  ngOnInit(): void {
    this.todoInput = this.todo!.title;
    this.completeTodo = this.todo!.completed;

  }

  getUpdate() {
    this.editTodo = !this.editTodo;
  }

  updateTodo(){
    this.editTodo = !this.editTodo;
    if(this.todoInput!.trim().length > 0)
    this.store.dispatch(actions.addTodoAction({
      id: this.todo!.id,
      completed: this.todo!.completed,
      title: this.todoInput!.trim(),
    }));
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodoAction({
      id: this.todo!.id,
      completed: this.todo!.completed,
      title: this.todo!.title
    }))
  }

  completedTodo() {
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      completed: this.completeTodo,
      title: this.todo!.title,
    }))
  }

}
