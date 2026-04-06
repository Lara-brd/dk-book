import { Component } from '@angular/core';
import { DashboardHeader } from "../../ui/dashboard-header/dashboard-header";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardHeader,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
