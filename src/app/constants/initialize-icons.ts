import { inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IMAGE_URL } from './constants';
import { ICONS } from '../models/icon.model';

/*
Here we are importing our IMAGE_URL and our ICONS object,
along with the MatIconRegistry and DomSanitizer and injecting them using the inject function.
With this, we can iterate over each of our icons and register them in turn.
*/


export function initializeIcons() {

  return () => {

    const iconRegistry = inject(MatIconRegistry);

    const sanitizer = inject(DomSanitizer);

    const icons = ICONS;



    Object.keys(icons).forEach((icon) => {

      iconRegistry.addSvgIcon(

        icon,

        sanitizer.bypassSecurityTrustResourceUrl(`${IMAGE_URL}/${icon}.svg`)

      );

    });

  };

}
