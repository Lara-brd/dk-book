import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTables } from './dashboard-tables';

describe('DashboardTables', () => {
  let component: DashboardTables;
  let fixture: ComponentFixture<DashboardTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTables],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
