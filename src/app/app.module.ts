import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

//import { AppRoutingModule } from './app-routing.module'; Q: am i missing this
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
