import { Component } from '@angular/core';
import { LeaveForm } from './leave-form/leave-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeaveForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}