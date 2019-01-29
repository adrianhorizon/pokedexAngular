import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSideBarComponent } from './pokemon-side-bar.component';

describe('PokemonSideBarComponent', () => {
  let component: PokemonSideBarComponent;
  let fixture: ComponentFixture<PokemonSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
