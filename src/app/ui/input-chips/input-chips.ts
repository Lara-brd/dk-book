import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export interface VehicleTag {
  name: string;
}

@Component({
  selector: 'app-input-chips',
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './input-chips.html',
  styleUrl: './input-chips.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChips {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  readonly vehicleTags = signal<VehicleTag[]>([
    { name: 'SUV' },
    { name: 'Hybrid' },
    { name: 'Automatic' },
    { name: 'Electric' },
    { name: 'GPS' }
  ]);

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.vehicleTags.update(tags => [...tags, { name: value }]);
    }

    event.chipInput?.clear();
  }

  remove(tag: VehicleTag): void {
    this.vehicleTags.update(tags => {
      const index = tags.indexOf(tag);
      if (index < 0) {
        return tags;
      }

      const updated = [...tags];
      updated.splice(index, 1);
      this.announcer.announce(`Removed ${tag.name}`);
      return updated;
    });
  }

  edit(tag: VehicleTag, event: MatChipEditedEvent): void {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    this.vehicleTags.update(tags => {
      const index = tags.indexOf(tag);
      if (index >= 0) {
        const updated = [...tags];
        updated[index] = { name: value };
        return updated;
      }
      return tags;
    });
  }
}
