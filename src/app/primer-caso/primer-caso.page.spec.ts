import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimerCasoPage } from './primer-caso.page';

describe('PrimerCasoPage', () => {
  let component: PrimerCasoPage;
  let fixture: ComponentFixture<PrimerCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
