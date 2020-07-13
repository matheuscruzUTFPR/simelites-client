import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogiasComponent } from './genealogias.component';

describe('GenealogiasComponent', () => {
  let component: GenealogiasComponent;
  let fixture: ComponentFixture<GenealogiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
