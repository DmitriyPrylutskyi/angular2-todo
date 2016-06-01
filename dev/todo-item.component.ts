
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    templateUrl: '../templates/todo-item.component.html',
    styleUrls: ['./src/css/todo-item.component.css']
})

export class TodoItemComponent {
    @Input () todo: Todo;

    @Output () deleted = new EventEmitter();
    
    toggleChangeDone () {
        this.todo.done =!this.todo.done;
    }
    
    del () {
        this.deleted.emit(this.todo);
    }
}
