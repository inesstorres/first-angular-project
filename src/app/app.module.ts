import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
