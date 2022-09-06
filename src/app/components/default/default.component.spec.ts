import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultComponent } from './default.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DefaultComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-angular'`, () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-angular app is running!');
  });
});
