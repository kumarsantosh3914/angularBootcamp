import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

import { Todo } from 'src/app/model/Todo';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';

TodoService

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor(private todoservice: TodoService) {};

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todoservice.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoservice.deleteTodo(todo);
  }

}
