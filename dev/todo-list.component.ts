import {Component, Input} from '@angular/core';
import { TodoItemComponent } from './todo-item.component';
import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: '../templates/todo-list.component.html',
    styleUrls: ['./src/css/todo-list.component.css'],
    directives: [TodoItemComponent]
})

export class TodoListComponent {
    @Input () todos: Todo[];

    onTodoDeleted (todo: Todo) {
        if (todo) {
            let index = this.todos.indexOf(todo);
            if (index > -1) {
                this.todos.splice(index,1);
            }
        }
    }
}
