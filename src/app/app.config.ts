import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
    provideAppInitializer, // add this line
} from '@angular/core';

import { provideRouter, withDebugTracing } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { initializeIcons } from './constants/initialize-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // En tus providers
    provideHttpClient(),
    provideRouter(routes, withDebugTracing()),
    provideAppInitializer(initializeIcons()), // add this line

  ]
};
