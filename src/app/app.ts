import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./core/toolbar/toolbar";
import { IconService } from './core/services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pro-angular-mat');
  private readonly iconRegistry = inject(IconService).loadIcons();

}
