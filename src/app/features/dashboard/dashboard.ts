import { Component } from '@angular/core';
import { DashboardHeader } from "../../ui/dashboard-header/dashboard-header";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DashboardCards } from "../../ui/dashboard-cards/dashboard-cards";
import { DashboardTables } from "../../ui/dashboard-tables/dashboard-tables";

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardHeader,
    MatMenuModule,
    MatIconModule,
    DashboardCards,
    DashboardTables
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
