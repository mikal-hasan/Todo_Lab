import { Component, OnInit } from '@angular/core';
import { TodoService} from '../services/todo.service';

import { Todo } from '../models/Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
    todos: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  //to be completed
  ngForOf(){

  }
  //completed
  ngIF(){

  }

}
