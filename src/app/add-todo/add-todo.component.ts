import { Component, OnInit } from '@angular/core';

interface listDos {
  id: number;
  name: string;
  isCompleted?: boolean;
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {

  id: number = 0;
  addToList: listDos [] = [];
  taskName: string='';

  constructor() { }

  ngOnInit() {
    
  }

  addItem() {
    this.addToList.push ({
      id: ++this.id,
      name: this.taskName,
      isCompleted: false
    })
  }

  deleteItem(id: number) {
      this.addToList=this.addToList.filter(elem => {
      return elem.id != id;
    })
  }

  editItem(e) {
    this.addToList=this.addToList.map(elem=> {
      if (elem.id === e.id) {
        elem.name = e.newName;
      }
      return elem;
    })
  }

}
