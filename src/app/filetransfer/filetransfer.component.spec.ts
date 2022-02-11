import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiletransferComponent } from './filetransfer.component';

describe('FiletransferComponent', () => {
  let component: FiletransferComponent;
  let fixture: ComponentFixture<FiletransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiletransferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiletransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
