import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListgitComponent } from './user-listgit.component';

describe('UserListgitComponent', () => {
  let component: UserListgitComponent;
  let fixture: ComponentFixture<UserListgitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListgitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
