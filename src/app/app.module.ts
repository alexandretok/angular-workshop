import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemComponent } from 'src/components/todo-item/todo-item.component';
import { TodoListComponent } from 'src/components/todo-list/todo-list.component';
import { WarningMessageComponent } from 'src/components/warning-message/warning-message.component';
import { TodoPageComponent } from 'src/pages/todo-page/todo-page.component';
import { ArchivePageComponent } from 'src/pages/archive-page/archive-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoPageComponent
  },
  {
    path: 'archive',
    component: ArchivePageComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    WarningMessageComponent,
    TodoPageComponent,
    ArchivePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
