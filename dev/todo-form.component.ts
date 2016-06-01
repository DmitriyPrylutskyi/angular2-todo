
import {Component, Output, EventEmitter} from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-form',
    templateUrl: '../templates/todo-form.component.html',
    styleUrls: ['./src/css/todo-form.component.css']
})

export class TodoFormComponent {
    @Output () added = new EventEmitter();

    add (title: string){
        if (title) {
            this.added.emit(new Todo(title));
        }
    }
}
