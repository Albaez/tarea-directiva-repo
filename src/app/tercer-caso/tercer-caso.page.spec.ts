import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TercerCasoPage } from './tercer-caso.page';

describe('TercerCasoPage', () => {
  let component: TercerCasoPage;
  let fixture: ComponentFixture<TercerCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
