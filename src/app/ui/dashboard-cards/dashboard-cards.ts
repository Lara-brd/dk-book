import { Component } from '@angular/core';
import { MAT_CARD_CONFIG, MatCardModule } from '@angular/material/card';
import { MatChipInputEvent, MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MAT_CARD_CONFIG_OPTIONS } from '../../constants/constants';
import { NgOptimizedImage } from '@angular/common';
import { ENTER } from '@angular/cdk/keycodes';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard-cards',
  imports: [
    MatCardModule,
    MatChipsModule,
    NgOptimizedImage,
    MatIconModule,
    MatDividerModule
  ],
  providers:[
    {
    provide: MAT_CARD_CONFIG,
    useValue: MAT_CARD_CONFIG_OPTIONS,
    },
  ],
  templateUrl: './dashboard-cards.html',
  styleUrl: './dashboard-cards.scss',
})
export class DashboardCards {
    // set up some test data to display in the cards

  portfolioValue = 123456.78;
  portfolioChange = 1.25;
  todaysGainLoss = 1532.1;
  cashBalance = 8765.43;
  watchlistItems = 5;


// this should be a pipe in a production application
 formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
 }



 selectionChange(selectedItem: MatChipListboxChange) {
  console.log(selectedItem);
 }



//  grid


  keysCodes = [ENTER];
  tags = ['Angular', 'Material'];



  add(event: MatChipInputEvent) {

    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }



  remove(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }




  // Ejemplos chips
  carTags = ['SUV', 'Automatic', 'Hybrid'];
  selectedVehicle = 'sedan';



}
