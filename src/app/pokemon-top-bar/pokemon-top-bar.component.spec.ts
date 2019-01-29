import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTopBarComponent } from './pokemon-top-bar.component';

describe('PokemonTopBarComponent', () => {
  let component: PokemonTopBarComponent;
  let fixture: ComponentFixture<PokemonTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
