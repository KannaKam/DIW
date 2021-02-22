import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaNewsComponent } from './manga-news.component';

describe('MangaNewsComponent', () => {
  let component: MangaNewsComponent;
  let fixture: ComponentFixture<MangaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
