import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from "@angular/material/divider";
import { MatInput } from "@angular/material/input";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-chapter4',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDivider,
    MatInput,
    MatSidenavModule
],
  templateUrl: './chapter4.html',
  styleUrl: './chapter4.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chapter4 {

  protected searchTerm = signal<string>('')
  protected notificationsCount = signal<number>(3);

  protected resultHint = computed(() =>
    this.searchTerm().length > 0
    ?`Showing results for "${this.searchTerm()}"`
    :'All Items'
  );


  addNotifications():void {
    this.notificationsCount.update((n) => n + 1);
  }


  clearNotification():void{
    this.notificationsCount.set(0);
  }

  clearSearch():void{
    this.searchTerm.set('');
  }






}
