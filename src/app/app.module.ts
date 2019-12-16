import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListDodoComponent } from './list-dodo/list-dodo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';

@NgModule({
   declarations: [
      AppComponent,
      AddTodoComponent,
      ListDodoComponent,
      ItemTodoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
