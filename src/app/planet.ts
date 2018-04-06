export class Planet {
  name: string
  track: number
  conquest: number
  resource: string
  victory_points: number
  colonization: string
  note: string
  status: string
  trackStep: number

  constructor(p) {
    this.name = p.name;
    this.track = p.track;
    this.conquest = p.conquest;
    this.resource = p.resource;
    this.victory_points = p.victory_points;
    this.colonization = p.colonization;
    this.note = p.note;

    this.status = 'hidden';
    this.trackStep = 0;
  }
}
