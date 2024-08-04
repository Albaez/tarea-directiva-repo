import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintoCasoPage } from './quinto-caso.page';

describe('QuintoCasoPage', () => {
  let component: QuintoCasoPage;
  let fixture: ComponentFixture<QuintoCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
