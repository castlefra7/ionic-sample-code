import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherprotectedComponent } from './anotherprotected.component';

describe('AnotherprotectedComponent', () => {
  let component: AnotherprotectedComponent;
  let fixture: ComponentFixture<AnotherprotectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherprotectedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherprotectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
