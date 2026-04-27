import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  Component,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { debounce, Field, form, FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CustomPaginator, PAGINATION_DEFAULT_OPTIONS } from '../../constants/constants';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';


interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number | string;
  gainLoss: number | string;
 }


 interface SearchModel {
  searchTerm: string;
 }



@Component({
  selector: 'app-dashboard-tables',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatCheckboxModule,
    CurrencyPipe,
    FormField
],
  providers:[
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: PAGINATION_DEFAULT_OPTIONS,
    },
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator,
    },
  ],
  templateUrl: './dashboard-tables.html',
  styleUrl: './dashboard-tables.scss',
})
export class DashboardTables {

  protected paginator = viewChild(MatPaginator);
  protected sort = viewChild(MatSort);

  protected readonly pageIndex = signal(0);
  protected readonly pageSize = signal(5);



  // Signal model for the search form
  protected readonly searchModel = signal<SearchModel>({
    searchTerm: '',
  });


    // Signal form with debounce validation
  protected readonly searchForm = form(this.searchModel, (path) => {
    debounce(path.searchTerm, 300);
  });



    // Computed signal for filtered data

  protected readonly filteredData = computed(() => {
    const term = this.searchModel().searchTerm.toLowerCase().trim();

    if (!term) {
      return this.holdings();
    }

    return this.holdings().filter((holding) =>
      holding.symbol.toLowerCase().includes(term)
    );

  });


  protected readonly paginatedData = computed(() => {

    const filtered = this.filteredData();

    const startIndex = this.pageIndex() * this.pageSize();

    const endIndex = startIndex + this.pageSize();

    return filtered.slice(startIndex, endIndex);

  });


  // Selection model for tracking selected rows

  selection = new SelectionModel<any>(true, []);


  onPageChange(event: any): void {

    this.pageIndex.set(event.pageIndex);

    this.pageSize.set(event.pageSize);

  }



  getTotalCost() {

    return this.holdings()

      .map((t) => t.currentPrice)

      .reduce((acc, value) => acc + value, 0);

  }


    displayedColumns = [
    'select',
    'symbol',
    'quantity',
    'avgCost',
    'currentPrice',
    'marketValue',
    'gainLoss',
    'actions',
  ];



  // repeat the data three times

  // to generate enough to use the pagination

  // repeated the data three times to generate enough to
  // use the pagination
  holdings = signal<Holding[]>([
    {
      symbol: 'APPL1',
      name: 'Apple Inc.',
      quantity: 100,
      avgCost: 90,
      currentPrice: 98,
      marketValue: 895,
      gainLoss: 226,
    },
    {
      symbol: 'GAME1',
      name: 'Apple Game',
      quantity: 0,
      avgCost: 145.0,
      currentPrice: 170.0,
      marketValue: '$5.50',
      gainLoss: 8.56,
    },
    {
      symbol: 'CRIO1',
      name: 'Corle Crio',
      quantity: 0,
      avgCost: 150.0,
      currentPrice: 175.5,
      marketValue: '+12.00%',
      gainLoss: '+1.20%',
    },
    {
      symbol: 'AAPL1',
      name: 'Bought 10x AAPL',
      quantity: 0,
      avgCost: 155.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+17.00%',
    },
    {
      symbol: 'MRLF1',
      name: 'Marlf€ Ine',
      quantity: 0,
      avgCost: 120.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+5.6%',
    },
    {
      symbol: 'APPL2',
      name: 'Apple Inc.',
      quantity: 100,
      avgCost: 100,
      currentPrice: 100,
      marketValue: 895,
      gainLoss: 226,
    },
    {
      symbol: 'GAME2',
      name: 'Apple Game',
      quantity: 0,
      avgCost: 150.0,
      currentPrice: 175.0,
      marketValue: '$5.50',
      gainLoss: 8.56,
    },
    {
      symbol: 'CRIO2',
      name: 'Corle Crio',
      quantity: 0,
      avgCost: 150.0,
      currentPrice: 175.5,
      marketValue: '+12.00%',
      gainLoss: '+1.20%',
    },
    {
      symbol: 'AAPL2',
      name: 'Bought 10x AAPL',
      quantity: 0,
      avgCost: 155.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+17.00%',
    },
    {
      symbol: 'MRLF2',
      name: 'Marlf€ Ine',
      quantity: 0,
      avgCost: 120.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+5.6%',
    },
    {
      symbol: 'APPL3',
      name: 'Apple Inc.',
      quantity: 100,
      avgCost: 100,
      currentPrice: 100,
      marketValue: 895,
      gainLoss: 226,
    },
    {
      symbol: 'GAME3',
      name: 'Apple Game',
      quantity: 0,
      avgCost: 150.0,
      currentPrice: 175.0,
      marketValue: '$5.50',
      gainLoss: 8.56,
    },
    {
      symbol: 'CRIO3',
      name: 'Corle Crio',
      quantity: 0,
      avgCost: 150.0,
      currentPrice: 175.5,
      marketValue: '+12.00%',
      gainLoss: '+1.20%',
    },
    {
      symbol: 'AAPL3',
      name: 'Bought 10x AAPL',
      quantity: 0,
      avgCost: 155.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+17.00%',
    },
    {
      symbol: 'MRLF3',
      name: 'Marlf€ Ine',
      quantity: 0,
      avgCost: 120.0,
      currentPrice: 175.0,
      marketValue: '+17.00%',
      gainLoss: '+5.6%',
    },
  ]);




  formatCurrency(value: number): string {

    return new Intl.NumberFormat('en-US', {

      style: 'currency',

      currency: 'USD',

    }).format(value);

  }



  isPositive(value: number | string): boolean {

    if (typeof value === 'number') {

      return value >= 0;

    }

    return value.toString().includes('+');

  }


// Check if all rows are selected

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.holdings().length;
    return numSelected === numRows;
  }


    // Check if all rows are selected (solo sobre la página visible)

  // isAllSelected(): boolean {
  //   const rows = this.paginatedData();
  //   return rows.length > 0 && rows.every(row => this.selection.isSelected(row));//cambios para select
  // }


    // Check if any rows are selected

  hasSelection(): boolean {
    return this.selection.selected.length > 0;
  }


  // toggle All arows
  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.holdings());
    }
  }


  // Toggle all rows (solo las visibles)

  // toggleAllRows(): void {
  //   const rows = this.paginatedData();

  //   if (this.isAllSelected()) {
  //     rows.forEach(row => this.selection.deselect(row));
  //   } else {
  //     rows.forEach(row => this.selection.select(row));
  //   }
  // }


    // Toggle individual row

  toggleRow(row: any): void {
    this.selection.toggle(row);
  }






}
