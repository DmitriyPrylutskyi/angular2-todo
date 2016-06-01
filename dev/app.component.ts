import { Component } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { Todo } from './todo';

@Component({
    selector: 'todo-app',
    templateUrl: '../templates/app.component.html',
    styleUrls: ['./src/css/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: Todo [];

    constructor () {
        this.title = 'Angular 2Do';
        this.todos = [];
    }
    onTodoAdded (todo: Todo) {
        this.todos.push(todo);
    }
}