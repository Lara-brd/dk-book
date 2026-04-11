import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_MENU_DEFAULT_OPTIONS, MatMenuModule } from '@angular/material/menu';
import { MENU_DEFAULT_OPTIONS } from '../../constants/constants';

@Component({
  selector: 'app-dashboard-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],

  providers: [
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: MENU_DEFAULT_OPTIONS,
    },
  ],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss',
})
export class DashboardHeader {

  // si quisiera en unos determinados menus puedo crear una constante y reutilizarla
  readonly menuConfig = {
    overlapTrigger: false,
    xPosition: 'before' as const,
    yPosition: 'above' as const,
    hasBackdrop: true,
  };

}
