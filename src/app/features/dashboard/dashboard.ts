import { Component } from '@angular/core';
import { DashboardHeader } from "../../ui/dashboard-header/dashboard-header";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DashboardCards } from "../../ui/dashboard-cards/dashboard-cards";

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardHeader,
    MatMenuModule,
    MatIconModule,
    DashboardCards
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
