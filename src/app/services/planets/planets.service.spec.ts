import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlanetsService, Planet } from './planets.service';

fdescribe('PlanetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        // HttpClientTestingModule,
      ],
      providers: [
        PlanetsService,
      ]
    });
  });

  it('should be created', inject([PlanetsService], (service: PlanetsService) => {
    expect(service).toBeTruthy();
  }));
  it('should define "getPlanets" method', inject([PlanetsService], (service: PlanetsService) => {
    expect(service.getPlanets).toBeDefined();
  }));
  describe('The "getPlanets" method', () => {
    const HttpClientSpy = jasmine.createSpyObj('HttpClientSpy',['get'])
    HttpClientSpy.get.and.returnValue([{
      name: "Jakks",
      track: 2,
      conquest: "d",
      resource: "c",
      victory_points: 1,
      colonization: "Acquire 1 culture",
      note: ""
    },]);
    const service = new PlanetsService (HttpClientSpy)

    it('should retrieve planets via HTTP', () => {
      const p = service.getPlanets();
      expect(HttpClientSpy.get).toHaveBeenCalled();
      expect(p[0].name).toBe('Jakks');
    });
  })
});
