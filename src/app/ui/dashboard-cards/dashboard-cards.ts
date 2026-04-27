import { Component, inject, signal } from '@angular/core';
import { MAT_CARD_CONFIG, MatCardModule } from '@angular/material/card';
import { MatChip, MatChipInputEvent, MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MAT_CARD_CONFIG_OPTIONS } from '../../constants/constants';
import { NgOptimizedImage } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputChips } from "../input-chips/input-chips";

@Component({
  selector: 'app-dashboard-cards',
  imports: [
    MatCardModule,
    MatChipsModule,
    NgOptimizedImage,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    InputChips
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

  readonly keywords = signal(['SUV', 'Automatic', 'Hybrid', 'Electric']);
  announcer = inject(LiveAnnouncer);

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

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


  // add(event: MatChipInputEvent):void{
  //   const value = (event.value || '').trim();
  //   if(value){
  //     this.keywords.update(k => [...k, value])
  //   }
  //   event.chipInput!.clear();
  // }

  remove(item:string):void{
    this.keywords.update(k => {
      const index = k.indexOf(item);
      if(index < 0){
        return k;
      }
      k.splice(index, 1);
      this.announcer.announce(`Removed ${item}`);
      return [...k];
    });

  }




  // remove(fruit: Fruit): void {
  //   this.fruits.update(fruits => {
  //     const index = fruits.indexOf(fruit);
  //     if (index < 0) {
  //       return fruits;
  //     }

  //     fruits.splice(index, 1);
  //     this.announcer.announce(`Removed ${fruit.name}`);
  //     return [...fruits];
  //   });
  // }






  // Ejemplos chips
  carTags = ['SUV', 'Automatic', 'Hybrid'];
  selectedVehicle = 'sedan';

  removeKeyword(keyword: string) {
    this.keywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword}`);
      return [...keywords];
    });
  }



}
