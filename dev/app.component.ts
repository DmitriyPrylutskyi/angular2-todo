import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { Todo } from './todo';

@Component({
    selector: 'todo-app',
    templateUrl: './dev/app.component.html',
    styleUrls: ['./src/css/app.component.css'],
    directives: [TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: Todo [];

    constructor () {
        this.title = 'Angular 2Do';
        this.todos = [];
    }

    addToDo (title: string){
        if (title) {
            this.todos.push(new Todo(title));
        }
    }
}