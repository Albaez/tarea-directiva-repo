import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartoCasoPage } from './cuarto-caso.page';

describe('CuartoCasoPage', () => {
  let component: CuartoCasoPage;
  let fixture: ComponentFixture<CuartoCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
