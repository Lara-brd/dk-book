import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-screen-one',
  imports: [],
  templateUrl: './screenOne.html',
  styleUrl: './screenOne.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenOne { }
