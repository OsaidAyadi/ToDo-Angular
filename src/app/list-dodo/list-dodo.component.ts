import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-dodo',
  templateUrl: './list-dodo.component.html',
  styleUrls: ['./list-dodo.component.css']
})
export class ListDodoComponent implements OnInit {
  @Input() receivedToDos: any;
  @Output() idToBoss = new EventEmitter<number>();
  @Output() nameToBoss = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  passId(id: number) {
    this.idToBoss.emit(id);
  }

  passName(name: string) {
    this.nameToBoss.emit(name);
  }
}
