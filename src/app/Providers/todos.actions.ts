import { createAction, props } from "@ngrx/store";
import { TodoModel_I } from "./todos.states";



const addTodoAction = createAction("[TODO] ADD_TODO", props<TodoModel_I>())
const updateTodoAction = createAction("[TODO] UPDATE_TODO", props<TodoModel_I>())
const deleteTodoAction = createAction("[TODO] DELETE TODO",props<TodoModel_I>())


export const actions = {addTodoAction,updateTodoAction,deleteTodoAction};