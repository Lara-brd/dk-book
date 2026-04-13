import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_SCROLL_STRATEGY, MatMenuModule } from '@angular/material/menu';
import { MENU_DEFAULT_OPTIONS, scrollFactory } from '../../constants/constants';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers:[
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay],
    },
  ],

  // si quisiera que todos los menus del componente tubieran esa config lo pongo aqui si lo quiero a nivel global en el archivo config, aqui voy a usar la config solo en determinados menus
  // providers: [
  //   {
  //     provide: MAT_MENU_DEFAULT_OPTIONS,
  //     useValue: MENU_DEFAULT_OPTIONS,
  //   },
  // ],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss',
})
export class DashboardHeader {

  // si quisiera en unos determinados menus puedo crear una constante y reutilizarla
  readonly menuConfig = {
    overlapTrigger: true,
    xPosition: 'before' as const,
    yPosition: 'above' as const,
    backdropClass: 'menu-backdrop',
    hasBackdrop: true,

  };

}
