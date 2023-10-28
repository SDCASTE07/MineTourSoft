import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsupervisorComponent } from './newsupervisor.component';

describe('NewsupervisorComponent', () => {
  let component: NewsupervisorComponent;
  let fixture: ComponentFixture<NewsupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
