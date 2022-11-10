import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDtlsComponent } from './company-dtls.component';

describe('CompanyDtlsComponent', () => {
  let component: CompanyDtlsComponent;
  let fixture: ComponentFixture<CompanyDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
