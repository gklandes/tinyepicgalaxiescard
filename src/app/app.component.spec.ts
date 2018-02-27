import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have a Card instance with inital values`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card).toBeDefined();
    expect(app.card.energy).toBe(2);
    expect(app.card.culture).toBe(1);
    expect(app.card.level).toBe(1);
  }));
  it(`should support adding energy`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card.energy).toBe(2);
    app.addEnergy();
    expect(app.card.energy).toBe(3);
  }));
  it(`should support adding culture`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card.culture).toBe(1);
    app.addCulture();
    expect(app.card.culture).toBe(2);
  }));
  it(`should support using energy`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card.energy).toBe(2);
    app.useEnergy();
    expect(app.card.energy).toBe(1);
  }));
  it(`should support using culture`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card.culture).toBe(1);
    app.useCulture();
    expect(app.card.culture).toBe(0);
  }));
  it(`should support leveling up with energy`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.card.energy).toBe(2);
    expect(app.card.level).toBe(1);
    app.levelUp('energy');
    expect(app.card.energy).toBe(0);
    expect(app.card.level).toBe(2);
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
