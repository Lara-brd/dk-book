import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-chapter3',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './chapter3.html',
  styleUrl: './chapter3.scss',
})
export class Chapter3 {}
