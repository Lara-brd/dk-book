import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { ErrorPage } from './features/pages/error-page/error-page';
import { Chapter3 } from './features/pages/chapter3/chapter3';
import { Chapter2 } from './features/pages/chapter2/chapter2';
import { Chapter4 } from './features/pages/chapter4/chapter4';
import { FourSidebar } from './features/pages/4-sidebar/4-sidebar';
import { ScreenOne } from './features/pages/4-sidebar/screenOne/screenOne';
import { ScreenTwo } from './features/pages/4-sidebar/screenTwo/screenTwo';
import { ForSidebarTwo } from './features/pages/4-sidebar-two/4-sidebar-two';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:Home,
    children: [
      { path: '', redirectTo:'chapter3', pathMatch: 'full'},
      { path: 'chapter2', component:Chapter2},
      { path: 'chapter3', component:Chapter3},
      { path: 'chapter4', component:Chapter4},
      { path: '4sidebar',
        component:FourSidebar,
        children:[
          {path:'', redirectTo:'one', pathMatch:'full'},
          {path:'one', component:ScreenOne},
          {path:'two', component:ScreenTwo}
        ]
      },
      {path:'4sidebar2', component:ForSidebarTwo }
    ]
  },
  {
    path:'error',
    component:ErrorPage
  },
  {
    path:'**',
    redirectTo:'home'
  },
];
