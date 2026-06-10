import { Component, inject, Input } from '@angular/core';
import { TaskObjType } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskObjType;
  private tasksService = inject(TasksService);

  // Handle task completion
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
