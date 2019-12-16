import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})

export class ItemTodoComponent implements OnInit {
  @Input() receivedListItem: any;
  @Output() idToParent = new EventEmitter<number>();
  @Output() changeName = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(e) {
    this.idToParent.emit(e);
  }

  editTask(e) {
    const element: any = document.getElementById(e);
    element.disabled = false;
    element.classList.add('active');
    element.focus();
  }

  onKey(e,id) {
    const element: any = document.getElementById(id);
    let newName: string = e.target.value;
    this.changeName.emit({newName, id});
    element.disabled = true;
    element.classList.remove('active');
  }

}
