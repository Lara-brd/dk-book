import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { MatListModule, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-4-sidebar',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatNavList,
    MatIconModule,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    RouterOutlet,
    RouterLink,   // DEBES agregarlo aquí
],
  templateUrl: './4-sidebar.html',
  styleUrl: './4-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourSidebar {

}
