import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSideComponent } from './pokemon-side.component';

describe('PokemonSideComponent', () => {
  let component: PokemonSideComponent;
  let fixture: ComponentFixture<PokemonSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
