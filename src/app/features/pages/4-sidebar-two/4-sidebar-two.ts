import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  icon: string;
  read: boolean;
}



/*



A sidenav is typically used for navigation menus but It can also be used as a contextual side panel.

Multiple sidenavs can coexist on the same page, each one with a different responsibility: navigation, notifications, filters, item details, editing forms, index page, or assignment actions.

When working with multiple sidenavs at the same time, it is important to give each one a unique template reference name, such as #menuNav, #filtersNav, or #notificationsNav. This way, each sidebar can be opened and closed independently without conflicts.

This makes the sidenav component very useful for complex dashboards, where the user can access extra information or actions without leaving the current page.


*one:notifications
This example uses an Angular Material mat-sidenav as a right-side notifications panel.
When the button is clicked, the panel opens on the right side and displays the notifications.
When the close button is clicked, the panel closes and the notifications are hidden.


<button></button>
To achieve this sidenav behavior, we use:
- on the open botton (click)="endNav.close()"
- on the close botton (click)="endNav.close()"


<mat-sidenav>
Both actions reference the same Angular Material sidenav through the template reference variable #endNav,
which is defined directly on the <mat-sidenav> tag.

Finally, (openedChange)="endOpen.set($event)" updates the endOpen signal every time the sidenav opens or closes. This allows us to know whether the panel is currently open or closed, so we can trigger other actions depending on its state.

  position="end" --> property places the panel on the right side
  mode="over" -->  makes it appear over the main content.



*Two: Index

This example uses an Angular Material mat-sidenav as a fixed left-side index panel.

The panel is always visible, so it does not need to be opened or closed.

It is displayed on the left side of the page and works as an index, allowing the user to navigate between different sections of the same content.

To achieve this behavior, we use the following properties on the <mat-sidenav> element:

position="start"
mode="side"
[opened]="true"


*tree: filters
This example uses an Angular Material mat-sidenav as a left-side filters panel with mode="push".
When the Open filters button is clicked, filtersNav.toggle() opens the sidebar from the left side. Because the sidenav uses mode="push", the main content is pushed to the right while the filters panel is visible.

When the sidebar is open, the button text changes to Close filters using the filtersOpen() signal.

The close button inside the sidebar calls filtersNav.close(), closing the filters panel and returning the main content to its original position.

The (openedChange)="filtersOpen.set($event)" event updates the filtersOpen signal whenever the sidebar opens or closes, so the UI always knows the current state of the panel.






*/


@Component({
  selector: 'app-4-sidebar-two',
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  templateUrl: './4-sidebar-two.html',
  styleUrl: './4-sidebar-two.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSidebarTwo {
    /*————————————————————————————————————————————————————————————————————————
  🔸 ESTADO SIDENAV
  ————————————————————————————————————————————————————————————————————————*/

  endOpen = signal<boolean>(false);
  // s-tree
  filtersOpen = signal(false);
  /*————————————————————————————————————————————————————————————————————————
  🔸 MOCK NOTIFICACIONES
  ————————————————————————————————————————————————————————————————————————*/

  notifications = signal<NotificationItem[]>([
    {
      id: 1,
      title: 'Order ready for planning',
      message: 'A new order has been created and is waiting to be assigned.',
      time: '5 min ago',
      icon: 'assignment',
      read: false
    },
    {
      id: 2,
      title: 'Order updated',
      message: 'Order LPD-202604-001 has changed its unloading time.',
      time: '18 min ago',
      icon: 'local_shipping',
      read: false
    },
    {
      id: 3,
      title: 'Vehicle assigned',
      message: 'Work order OT-202604-004 has been assigned successfully.',
      time: '1 h ago',
      icon: 'check_circle',
      read: true
    },
    {
      id: 4,
      title: 'Planning alert',
      message: 'There are work orders without an assigned vehicle for today.',
      time: '2 h ago',
      icon: 'warning',
      read: false
    },
    {
      id: 5,
      title: 'Route completed',
      message: 'The driver has completed the assigned route.',
      time: 'Yesterday',
      icon: 'route',
      read: true
    }
  ]);

  /*————————————————————————————————————————————————————————————————————————
  🔸 COMPUTED
  ————————————————————————————————————————————————————————————————————————*/

  unreadCount = computed(() =>
    this.notifications().filter(notification => !notification.read).length
  );

  hasUnreadNotifications = computed(() =>
    this.unreadCount() > 0
  );

  /*————————————————————————————————————————————————————————————————————————
  🔸 ACTIONS
  ————————————————————————————————————————————————————————————————————————*/

  markRead(id: number): void {
    this.notifications.update(notifications =>
      notifications.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  markAllRead(): void {
    this.notifications.update(notifications =>
      notifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
  }

  addNotification(notification: Omit<NotificationItem, 'id' | 'read'>): void {
    const nextId = this.getNextNotificationId();

    this.notifications.update(notifications => [
      {
        id: nextId,
        read: false,
        ...notification
      },
      ...notifications
    ]);
  }

  removeNotification(id: number): void {
    this.notifications.update(notifications =>
      notifications.filter(notification => notification.id !== id)
    );
  }

  clearNotifications(): void {
    this.notifications.set([]);
  }

  private getNextNotificationId(): number {
    const ids = this.notifications().map(notification => notification.id);

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }
}
