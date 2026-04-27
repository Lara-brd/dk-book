
export const IMAGE_URL = 'assets/icons';
import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatCardConfig } from '@angular/material/card';
import { MatMenuDefaultOptions } from '@angular/material/menu';
import { MatPaginatorDefaultOptions, MatPaginatorIntl } from '@angular/material/paginator';


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




// table table

 export const PAGINATION_DEFAULT_OPTIONS: MatPaginatorDefaultOptions = {
  pageSize: 10,
  pageSizeOptions: [5, 10, 25, 50, 100],
  showFirstLastButtons: true,
  formFieldAppearance: 'outline',
  hidePageSize: false,
};



@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  override itemsPerPageLabel: string = 'Items per page:';
  override nextPageLabel: string = 'Next';
  override previousPageLabel: string = 'Previous';
  override firstPageLabel: string = 'First page';
  override lastPageLabel: string = 'Last page';
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0) {
      return '0 of 0';
    }
    const start = page * pageSize + 1;
    const end = Math.min((page + 1) * pageSize, length);
    return `${start} - ${end} of ${length}`;
  };
}




