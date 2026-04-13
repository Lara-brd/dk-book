
export const IMAGE_URL = 'assets/icons';
import { Overlay } from '@angular/cdk/overlay';
import { MatCardConfig } from '@angular/material/card';
import { MatMenuDefaultOptions } from '@angular/material/menu';


export const MENU_DEFAULT_OPTIONS: MatMenuDefaultOptions = {
  overlapTrigger: true,
  xPosition: 'before',
  yPosition: 'above',
  backdropClass: 'menu-backdrop',
  hasBackdrop: true,
};

// angular material por defecto usa
// {
//   overlapTrigger: false,
//   xPosition: 'after',
//   yPosition: 'below',
//   hasBackdrop: true,
// }


// scroll strategy
export function scrollFactory(overlay: Overlay) {
  return () => overlay.scrollStrategies.reposition();
}


// card outlined
export const MAT_CARD_CONFIG_OPTIONS: MatCardConfig = {
  appearance: 'outlined', // change value to suit
 };
