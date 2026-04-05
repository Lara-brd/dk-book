import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../../models/icon.model';
import { IMAGE_URL } from '../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class IconService {

  private iconRegistry = inject(MatIconRegistry);

  private sanitizer = inject(DomSanitizer);

  private icons = ICONS;



  loadIcons(): void {

    Object.keys(this.icons).forEach((icon) => {

      this.iconRegistry.addSvgIcon(

        icon,

        this.sanitizer.bypassSecurityTrustResourceUrl(

          `${IMAGE_URL}/${icon}.svg`

        )

      );

    });

  }

}
