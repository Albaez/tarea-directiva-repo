import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundoCasoPage } from './segundo-caso.page';

describe('SegundoCasoPage', () => {
  let component: SegundoCasoPage;
  let fixture: ComponentFixture<SegundoCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
