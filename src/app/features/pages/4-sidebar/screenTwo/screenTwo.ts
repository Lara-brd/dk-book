import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-screen-two',
  imports: [],
  templateUrl: './screenTwo.html',
  styleUrl: './screenTwo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTwo { }
