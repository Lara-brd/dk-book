import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
