import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeNewsComponent } from './anime-news.component';

describe('AnimeNewsComponent', () => {
  let component: AnimeNewsComponent;
  let fixture: ComponentFixture<AnimeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
