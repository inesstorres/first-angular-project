import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks/task/task';
import { NewTask } from '../tasks/new-task/new-task';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  @Output() add = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {}

  // Get tasks for the selected user
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
