import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovies } from './new-movies';

describe('NewMovies', () => {
  let component: NewMovies;
  let fixture: ComponentFixture<NewMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMovies],
    }).compileComponents();

    fixture = TestBed.createComponent(NewMovies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
