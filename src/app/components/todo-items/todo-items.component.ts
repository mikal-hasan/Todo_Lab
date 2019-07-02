import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new  EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //set dynamic class binding
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    // console.log('toggle');
    //Toogle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {console.log(todo)});
  }

  onDelete(todo) {
    // console.log('delete');
    this.deleteTodo.emit(todo);
  
  }
}
