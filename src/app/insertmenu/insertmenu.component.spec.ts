import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertmenuComponent } from './insertmenu.component';

describe('InsertmenuComponent', () => {
  let component: InsertmenuComponent;
  let fixture: ComponentFixture<InsertmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
