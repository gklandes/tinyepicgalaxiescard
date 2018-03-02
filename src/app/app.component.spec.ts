import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const MockPlanetService = jasmine.createSpyObj('MockPlanetService',['getPlanets']);

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
  it(`should support leveling up with culture`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.addCulture();
    expect(app.card.culture).toBe(2);
    expect(app.card.level).toBe(1);
    app.levelUp('culture');
    expect(app.card.energy).toBe(0);
    expect(app.card.level).toBe(2);
  }));
  it(`should increment rockets when leveling`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.card.level).toBe(1);
    expect(app.card.getLevelProp('rockets')).toBe(2);
    
    app.levelUp('energy'); // lvl 2
    expect(app.card.getLevelProp('rockets')).toBe(2);

    repeatFn(function () { app.addEnergy(); },3);
    app.levelUp('energy'); // lvl 3
    expect(app.card.getLevelProp('rockets')).toBe(3);

    repeatFn(function () { app.addEnergy(); },4);
    app.levelUp('energy'); // lvl 4
    expect(app.card.getLevelProp('rockets')).toBe(3);

    repeatFn(function () { app.addEnergy(); },5);
    app.levelUp('energy'); // lvl 5
    expect(app.card.getLevelProp('rockets')).toBe(3);

    repeatFn(function () { app.addEnergy(); },6);
    app.levelUp('energy'); // lvl 6
    expect(app.card.getLevelProp('rockets')).toBe(3);
  }));
  it(`should increment dice when leveling`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.card.level).toBe(1);
    expect(app.card.getLevelProp('dice')).toBe(4);
    
    app.levelUp('energy'); // lvl 2
    expect(app.card.getLevelProp('dice')).toBe(5);

    repeatFn(function () { app.addEnergy(); },3);
    app.levelUp('energy'); // lvl 3
    expect(app.card.getLevelProp('dice')).toBe(5);

    repeatFn(function () { app.addEnergy(); },4);
    app.levelUp('energy'); // lvl 4
    expect(app.card.getLevelProp('dice')).toBe(6);

    repeatFn(function () { app.addEnergy(); },5);
    app.levelUp('energy'); // lvl 5
    expect(app.card.getLevelProp('dice')).toBe(6);

    repeatFn(function () { app.addEnergy(); },6);
    app.levelUp('energy'); // lvl 6
    expect(app.card.getLevelProp('dice')).toBe(7);
  }));
  it(`should load planets`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.planets).toBeDefined();
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));

  function repeatFn (fn: Function, n: number): void {
    for (let i = 0; i < n; i++) {
      fn();
    }
  }
});
